
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import Routes from '../routes/Routes';
import configureStore from '../createstore';
import generateClientHTML from './generateClientHTML';
import { loadCustomers } from '../actions/customerActions';
import { routes } from '../routes/routeConfig';
import Promise from 'bluebird';

export const renderAdminApp = (req, res) => {
  function getReduxPromise(route) {
    const comp = route.component;
    const promise = comp.fetchData ?
      comp.fetchData({ store, history }) : Promise.resolve();

    return promise;
  }
  const history = createHistory();
  const initalState = {};
  const store = configureStore(history, initalState);
  const context = {};

  const match = routes.reduce((acc, route) => {
    const matchedRoute = matchPath(req.url, route);
    if (matchedRoute) {
      return Object.assign({}, acc, route);
    }
    return acc;
  }, { path: '/login', exact: true });

  const reactApp = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Route render={({ location }) => (<Routes location={location} />)} />
      </StaticRouter>
    </Provider>,
  );

  getReduxPromise(match).then(() => {
    const preloadedState = store.getState();
    // console.log('PRELOADED STATE?', preloadedState);
    const html = generateClientHTML({
      reactApp,
      preloadedState,
      helmet: Helmet.renderStatic(),
    });
    res.send(html);
  })
    .catch((err) => {
      res.send(err);
    });
};
