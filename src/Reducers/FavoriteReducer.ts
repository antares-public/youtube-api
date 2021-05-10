import { SAVE_TO_FAVORITE } from "../Actions/ActionTypes";

export default function FavoriteReducer(
  state = JSON.parse(localStorage.getItem("favorite") || "[]"),
  action: { type: string; keywords: string }
) {
  switch (action.type) {
    case SAVE_TO_FAVORITE:
      return [...state, { keywords: action.keywords }];
    default:
      return state;
  }
}
