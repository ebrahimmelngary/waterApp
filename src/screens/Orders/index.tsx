import * as React from 'react';
import TopTabs from '../../component/template/TopTaps';
import CurrentOrders from './currentOrders';
import PrevOrders from './preOrders';
import {Trans} from '../../i18n';
const Orders = () => {
  const screenRoutes = [
    {key: 'currentOrders', title: Trans('currentOrders')},
    {key: 'previousOrders', title: Trans('previousOrders')},
  ];

  const renderScene = {
    currentOrders: CurrentOrders,
    previousOrders: PrevOrders,
  };

  return <TopTabs screenRoutes={screenRoutes} renderScenes={renderScene} />;
};
export default React.memo(Orders);
