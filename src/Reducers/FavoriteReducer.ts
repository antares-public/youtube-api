import {
  SAVE_TO_FAVORITE,
  CLEAR_DATA,
  DELETE_FAVORITE,
} from "../Actions/ActionTypes";

export default function FavoriteReducer(
  state = JSON.parse(localStorage.getItem("favorite") || "[]"),
  action: { type: string; keywords: string }
) {
  switch (action.type) {
    case SAVE_TO_FAVORITE:
      return [...state, { keywords: action.keywords }];
    case CLEAR_DATA:
      return [];
    case DELETE_FAVORITE:
      return JSON.parse(localStorage.getItem("favorite") || "[]");
    default:
      return state;
  }
}
