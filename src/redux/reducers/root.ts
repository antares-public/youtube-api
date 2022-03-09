import { combineReducers } from "redux";
import FavoriteReducer from "./favorite";
import InitReducer from "./init";

export const RootReducer = combineReducers({
  auth: InitReducer,
  important: FavoriteReducer,
});
