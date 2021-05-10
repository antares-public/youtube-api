import { NEW_USER_TOKEN } from "./ActionTypes";

export const createNewToken = (token: string) => (
  dispatch: (arg: { type: string; token: string }) => void
) => {
  localStorage.setItem("user", token);

  dispatch({
    type: NEW_USER_TOKEN,
    token,
  });
};
