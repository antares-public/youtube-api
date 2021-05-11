// Init State
export interface ITokenState {
  token: string | null;
}

export interface ITokenAction {
  type: string;
  token: string;
}

// Favorite State
export interface IFavoriteState {
  count?: number;
  id: string;
  keywords: string;
  name?: string;
}

export interface IFavoriteAction {
  type: string;
  payload: IFavoriteState;
}
