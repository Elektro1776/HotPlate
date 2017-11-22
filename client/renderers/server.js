
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import Routes from '../routes/Routes';
import configureServerStore from '../createServerstore';
import generateClientHTML from './generateClientHTML';

export const renderClientApp = (req, res) => {
  const history = createHistory();
  const initalState = {};
  const store = configureServerStore(history, initalState);
  const context = {};
  const reactApp = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Route render={({ location, match }) => (<Routes location={location} />)} />
      </StaticRouter>
    </Provider>,
  );
  const html = generateClientHTML({
    reactApp,
    helmet: Helmet.renderStatic(),
  });
  res.send(html);
};

// function renderApp(url, req, res) {
//   const context = {};
//   const history = createHistory();
//   const initalServerState = {};
//   const ssr = () => {
//     const store = configureServerStore(history, initalServerState);
//
//     if (req.user) {
//       store.dispatch({
//         type: 'USER_TOKEN_SUCCESS',
//         payload: req.user,
//       });
//     }
//     const initalContent = renderToString(
//       <Provider store={store}>
//         <StaticRouter location={url} context={context}>
//           <Route render={({ location }) => (<Routes location={location} />)} />
//         </StaticRouter>
//       </Provider>,
//     );
//     const initalState = store.getState();
//     // console.log(' WHAT IS THE STORE STATE???', initalState);
//     return {
//       initalContent,
//       initalState,
//     };
//   };
//   return ssr();
// }
// export const renderPage = function serveIt(req, res) {
//   const match = routes.reduce((acc, route) => {
//     const realMatch = matchPath(req.url, route);
//     return realMatch || acc;
//   }, { path: '/', exact: true });
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
// };
