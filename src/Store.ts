import { createStore } from "redux";
import { NEW_USER_TOKEN, REMOVE_USER_TOKEN } from "./Actions/ActionTypes";

type InitialState = {
  token: null | string;
};

const initialState: InitialState = {
  token: null,
};

function state(state = initialState, action: any) {
  switch (action.type) {
    case NEW_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case REMOVE_USER_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}

const Store = createStore(state);

export default Store;
