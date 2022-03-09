import {
  SAVE_TO_FAVORITE,
  CLEAR_DATA,
  DELETE_FAVORITE,
  EDIT_FAVORITE,
} from "../actionTypes";
import { IFavoriteState, IFavoriteAction } from "../../interfaces";

const initialState: IFavoriteState[] = JSON.parse(
  localStorage.getItem("favorite") || "[]"
);

export default function FavoriteReducer(
  state = initialState,
  action: IFavoriteAction
) {
  switch (action.type) {
    case SAVE_TO_FAVORITE:
      return [...state, { keywords: action.payload }];
    case CLEAR_DATA:
      return [];
    case DELETE_FAVORITE:
      return JSON.parse(localStorage.getItem("favorite") || "[]");
    case EDIT_FAVORITE:
      return state.map((e: { id: string }) => {
        if (Number(action.payload.id) === Number(e.id)) {
          e = action.payload;
          return e;
        }
        return e;
      });
    default:
      return state;
  }
}
