import { lazy } from 'react';

const OrderDetails = lazy(() =>
  import('./OrderDetails' /* webpackChunkName: "order-details" */)
);

export default OrderDetails;
