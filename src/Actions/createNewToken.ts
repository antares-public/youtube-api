import { NEW_USER_TOKEN } from "./ActionTypes";

export const createNewToken = (token: string | null) => ({
  type: NEW_USER_TOKEN,
  token,
});
