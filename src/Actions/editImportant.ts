import { EDIT_FAVORITE } from "./ActionTypes";
import { IFavoriteState } from "../interfaces";

export const editFavorite = (search: IFavoriteState) => (dispatch: any) => {
  dispatch({ type: EDIT_FAVORITE, payload: search });
};
