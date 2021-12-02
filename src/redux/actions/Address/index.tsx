import {ADD_ADDRESS} from '../actionTypes';

interface addressParam {
  type: string;
  data: {
    id: string;
    apartNumber: string;
    floor: number;
    building: string;
    street: string;
    city: string;
    country: string;
    mobile: string;
  };
}
export const _setAddress = (data: addressParam) => ({
  type: ADD_ADDRESS,
  payload: data,
});
