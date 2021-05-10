import { combineReducers } from "redux";
import FavoriteReducer from "./FavoriteReducer";
import InitReducer from "./InitReducer";

export const RootReducer = combineReducers({
  auth: InitReducer,
  important: FavoriteReducer,
});
