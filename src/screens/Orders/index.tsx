import * as React from 'react';
import TopTabs from '../../component/template/TopTaps';
import CurrentOrders from './currentOrders';
import PrevOrders from './preOrders';
import {Trans} from '../../i18n';
export type User = {
  id: string;
  email: string;
  name: string;
  role: string;
  profilePicture: string;
};
export type Company = {
  id: string;
  email: string;
  name: string;
  role: string;
  profilePicture: string;
  isFavorite: boolean;
  rating: number;
};
export type Address = {
  id: string;
  apartNumber: string;
  floor: number;
  building: string;
  street: string;
  city: string;
  country: string;
  mobile: string;
  user: User;
};
export type Order = {
  id: string;
  status: string;
  waterAmount: number;
  shippingCost: number;
  subtotal: number;
  total: number;
  paymentMethod: string;
  estimatedDeliveryDate: string;
  customer: User;
  company: Company;
  address: Address;
};
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
