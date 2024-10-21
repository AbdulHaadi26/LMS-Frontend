export type AuthState = {
  isAuth: boolean;
};

export enum AuthActions {
  SET_AUTH = "AUTH[SET_AUTH]",
  LOGOUT = "AUTH[LOGOUT]",
}

const initialState: AuthState = {
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case AuthActions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActions.LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
