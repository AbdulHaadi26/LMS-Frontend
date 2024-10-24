export type LoginState = {
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export enum LoginActions {
  SET_LOADING = "LOGIN[SET_LOADING]",
  SET_ERROR = "LOGIN[SET_ERROR]",
  SET_SUCCESS = "LOGIN[SET_SUCCESS]",
}

export const initialState: LoginState = {
  isLoading: false,
  error: null,
  success: false,
};

export const loginReducer = (
  state = initialState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case LoginActions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: false,
      };
    case LoginActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        success: false,
      };
    case LoginActions.SET_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
