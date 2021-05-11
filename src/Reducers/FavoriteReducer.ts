import {
  SAVE_TO_FAVORITE,
  CLEAR_DATA,
  DELETE_FAVORITE,
  EDIT_FAVORITE,
} from "../Actions/ActionTypes";

export default function FavoriteReducer(
  state = JSON.parse(localStorage.getItem("favorite") || "[]"),
  action: any
) {
  switch (action.type) {
    case SAVE_TO_FAVORITE:
      return [...state, { keywords: action.keywords }];
    case CLEAR_DATA:
      return [];
    case DELETE_FAVORITE:
      return JSON.parse(localStorage.getItem("favorite") || "[]");
    case EDIT_FAVORITE:
      return state.map((e: any) => {
        if (action.search.id.toNumber() === e.id.toNumber()) {
          e = action.search;
          return e;
        }
        return e;
      });
    default:
      return state;
  }
}
