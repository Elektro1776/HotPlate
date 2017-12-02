
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
// function getReduxPromise (route) {
//   // let { query, params } = renderProps;
//   // comp.fetchData({ query, params, store, history }) :
//
//   let comp = route.component
//   let promise = comp.fetchData ?
//     comp.fetchData({ store, history }) :
//     Promise.resolve();
//   return promise;
// }
export const renderAdminApp = (req, res) => {
  console.log('RENDERING THE SERVER ROUTE!');
  function getReduxPromise(route) {
    // let { query, params } = renderProps;
    // comp.fetchData({ query, params, store, history }) :
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
    // console.log('WHAT IS OUR ACC?', route);
    if (matchedRoute) {
      return Object.assign({}, acc, route);
    }
    return acc;
  }, { path: '/login', exact: true });
  // const mapMatched = routes.map((route) => {
  //   const matchedRoute = matchPath(req.url, route);
  //   console.log('WHAT IS OUR MATCH?', matchedRoute);
  //   return matchedRoute;
  //   // return { ...matchedRoute, route }
  // });
  // console.log('WHAT IS THE MAP MATCH?', mapMatched);
  const reactApp = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Route render={({ location }) => (<Routes location={location} />)} />
      </StaticRouter>
    </Provider>,
  );
  // const html = generateClientHTML({
  //   reactApp,
  //   // preloadedState,
  //   helmet: Helmet.renderStatic(),
  // });
  // res.send(html);
  //
  console.log('WHAT IS THE ROUTE?', match);
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
