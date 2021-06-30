import React from "react";
import { STOP_INTRO } from "../../actions/actionTypes";


 const initialState = {
    fristTime: false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case STOP_INTRO:
    return {fristTime :true };

  default:
    return state
  }
};
