import { SAVE_TO_FAVORITE } from "../Actions/ActionTypes";

export default function FavoriteReducer(
  state = [],
  action: { type: string; keywords: string }
) {
  switch (action.type) {
    case SAVE_TO_FAVORITE:
      console.log(action.keywords);
      return [...state, { keywords: action.keywords }];
    default:
      return state;
  }
}
