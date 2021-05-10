export interface ITokenState {
  token: string | null;
}

export interface ITokenAction {
  type: string;
  token: string;
}
