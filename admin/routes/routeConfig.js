import * as RouteMap from './static';

export const routes = [
  {
    path: '/admin',
    component: RouteMap.Dashboard,
    exact: true,
  },
  {
    path: '/admin/customers',
    component: RouteMap.CustomerContainer,
    exact: true,
  },
];
