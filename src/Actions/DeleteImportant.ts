import { DELETE_FAVORITE } from "./ActionTypes";
import { IFavoriteState } from "../interfaces";

export const deleteImportant =
  (important: IFavoriteState[]) =>
  (dispatch: (arg: { type: string; payload: IFavoriteState[] }) => void) => {
    localStorage.setItem("favorite", JSON.stringify(important));
    dispatch({
      type: DELETE_FAVORITE,
      payload: important,
    });
  };
