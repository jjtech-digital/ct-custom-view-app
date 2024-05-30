import { lazy } from 'react';

const Orders = lazy(() =>
  import('./Orders' /* webpackChunkName: "Orders" */)
);

export default Orders;
