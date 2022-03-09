import { ITokenState, ITokenAction } from "../../interfaces";
import { NEW_USER_TOKEN, REMOVE_USER_TOKEN } from "../actionTypes";

const initialState: ITokenState = { token: localStorage.getItem("user") };

export default function InitReducer(
  state = initialState,
  action: ITokenAction
) {
  switch (action.type) {
    case NEW_USER_TOKEN:
      return { token: action.token };
    case REMOVE_USER_TOKEN:
      return { token: "" };
    default:
      return state;
  }
}
