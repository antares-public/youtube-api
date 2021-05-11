import { EDIT_FAVORITE } from "./ActionTypes";

export const editFavorite = (search: any) => (dispatch: any) => {
  dispatch({ type: EDIT_FAVORITE, search });
};
