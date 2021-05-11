import { DELETE_FAVORITE } from "./ActionTypes";

export const deleteImportant = (important: any) => (dispatch: any) => {
  localStorage.setItem("favorite", JSON.stringify(important));
  dispatch({
    type: DELETE_FAVORITE,
    payload: important,
  });
};
