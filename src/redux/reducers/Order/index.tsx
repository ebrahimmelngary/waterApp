import {ORDERD, REMOVEORDER} from '../../actions/actionTypes';

const initialState = {
  order: {
    quntity: 0,
    price: 0,
    totalPrice: 0,
    shipping: 0,
    total: 0,
  },
};

export default (state = initialState, order: {type: any; payload: any}) => {
  switch (order.type) {
    case ORDERD:
      return {...state, ...order?.payload};
    case REMOVEORDER:
      return {quntity: 0, price: 0, totalPrice: 0, shipping: 0, total: 0};

    default:
      return state;
  }
};
