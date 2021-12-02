import {ADD_ADDRESS} from '../../actions/actionTypes';

const initialState = {};

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {...action?.payload};

    default:
      return state;
  }
};
