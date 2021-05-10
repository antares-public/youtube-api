import { SAVE_TO_FAVORITE } from "./ActionTypes";

export const saveToFavorite = (keywords: string) => (
  dispatch: (arg: { type: string; keywords: string }) => void
) => {
  dispatch({
    type: SAVE_TO_FAVORITE,
    keywords,
  });
};
