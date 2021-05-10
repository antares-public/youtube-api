import { REMOVE_USER_TOKEN } from "./ActionTypes";

export const removeToken = () => (
  dispatch: (arg: { type: string }) => void
) => {
  localStorage.removeItem("user");

  dispatch({
    type: REMOVE_USER_TOKEN,
  });
};
