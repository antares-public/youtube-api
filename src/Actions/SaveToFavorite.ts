import { SAVE_TO_FAVORITE } from "./ActionTypes";

export const saveToFavorite = (keywords: string) => (dispatch: any) => {
  dispatch({
    type: SAVE_TO_FAVORITE,
    payload: keywords,
  });
};
