import { SAVE_TO_FAVORITE } from "../actionTypes";

export const saveToFavorite =
  (keywords: string) =>
  (dispatch: (arg: { type: string; payload: string }) => void) => {
    dispatch({
      type: SAVE_TO_FAVORITE,
      payload: keywords,
    });
  };
