import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, Route, Switch } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import createHistory from 'history/createMemoryHistory';
import generateHTML from './generateHTML';
import Routes from '../routes/adminRoutes';
import configureStore from '../createStore';

// const routes = [
//     {
//       path: '/',
//       exact: true,
//       strict: false,
//     },
//     {
//       path: '/admin/login',
//       exact: true,
//       strict: false,
//     },
//     {
//       path: '/admin/signup',
//       exact: true,
//       strict: false,
//     },
//     {
//       path: '/admin/dashboard',
//       exact: true,
//       strict: false,
//     },
//     {
//       path: '/admin/settings',
//       exact: true,
//       strict: false,
//     },
//     {
//       path: '/admin/profile',
//       exact: true,
//       strict: false,
//     },
// ];

export const renderAdminApp = (req, res) => {
  // console.log(' WHAT IS THE URL??', url);
  const history = createHistory();
  const initalState = {}
  const store = configureStore(history, initalState);
  const context = {};
  const reactApp = renderToString(
    <Provider store={store}>
      <StaticRouter basename="/admin" location={req.url} context={context}>
        <Route render={({ location, match }) => (<Routes location={location} />)} />
      </StaticRouter>
    </Provider>,
  );
  const html = generateHTML({
    reactApp,
    helmet: Helmet.renderStatic(),
  });
  res.send(html);
}
// export const renderAdmin = (req, res) => {
//
//   const match = routes.reduce((acc, route) => {
//     const realMatch = matchPath(req.url, route);
//     return realMatch || acc;
//   }, { path: '/admin', exact: true });
//   // console.log(' DO WE MAKE IT PAST OUR MATCH CHECK', match);
//   // console.log(' WHAT IS OUR REQ URL??', req.url);
//   // const assets = require('../../build/assets.json');
//   // assets.manifest.text = fs.readFileSync(
//   //   join(__dirname, '..', '..', 'build', basename(assets.manifest.js)),
//   //   'utf-8'
//   // );
//   if (match !== null) {
//     return renderApp(match, req, res);
//   }
// }
