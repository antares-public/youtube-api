import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { IState } from "./interfaces";

import { NEW_USER_TOKEN, REMOVE_USER_TOKEN } from "./Actions/ActionTypes";

const initialState: IState = { token: localStorage.getItem("user") };

function state(state = initialState, action: any) {
  switch (action.type) {
    case NEW_USER_TOKEN:
      return { token: action.token };
    case REMOVE_USER_TOKEN:
      return { token: "" };
    default:
      return state;
  }
}

const Store = createStore(state, applyMiddleware(thunk));

export default Store;
