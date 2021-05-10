import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { NEW_USER_TOKEN, REMOVE_USER_TOKEN } from "./Actions/ActionTypes";

const initialState = { token: localStorage.getItem("user") };

function state(state: any = initialState, action: any) {
  switch (action.type) {
    case NEW_USER_TOKEN:
      console.log(state);
      return { token: action.token };
    case REMOVE_USER_TOKEN:
      console.log(state);
      return { token: "" };
    default:
      return state;
  }
}

const Store = createStore(state, applyMiddleware(thunk));

export default Store;
