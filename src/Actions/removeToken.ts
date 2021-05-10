import { REMOVE_USER_TOKEN } from "./ActionTypes";

export const removeToken = () => (dispatch: any) => {
  dispatch({
    type: REMOVE_USER_TOKEN,
  });
};
