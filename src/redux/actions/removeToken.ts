import { REMOVE_USER_TOKEN, CLEAR_DATA } from "../actionTypes";

export const removeToken =
  () => (dispatch: (arg: { type: string }) => void) => {
    localStorage.clear();

    dispatch({
      type: REMOVE_USER_TOKEN,
    });
    dispatch({
      type: CLEAR_DATA,
    });
  };
