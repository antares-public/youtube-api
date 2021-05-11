import { EDIT_FAVORITE } from "./ActionTypes";
import { IFavoriteState } from "../interfaces";

export const editFavorite =
  (search: IFavoriteState) =>
  (dispatch: (arg: { type: string; payload: IFavoriteState }) => void) => {
    dispatch({ type: EDIT_FAVORITE, payload: search });
  };
