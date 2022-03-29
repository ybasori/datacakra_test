import { Action, AuthAction, AuthState } from "../types";

const initState: AuthState = {
  isLoadingLogin: false,
  authData: null,
  errorLogin: null,
  isLoadingRegister: false,
  registerData: null,
  errorRegister: null,
};

const auth = (state = initState, action: Action) => {
  switch (action.type) {
    case AuthAction.POST_LOGIN_LOADING:
      return {
        ...state,
        isLoadingLogin: true,
        authData: null,
        errorLogin: null,
      };
    case AuthAction.POST_LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingLogin: false,
        authData: action.payload,
        errorLogin: null,
      };
    case AuthAction.POST_LOGIN_ERROR:
      return {
        ...state,
        isLoadingLogin: false,
        authData: null,
        errorLogin: action.payload,
      };
    case AuthAction.POST_LOGIN_RESET:
      return {
        ...state,
        isLoadingLogin: false,
        authData: null,
        errorLogin: null,
      };
    case AuthAction.POST_REGISTER_LOADING:
      return {
        ...state,
        isLoadingRegister: true,
        registerData: null,
        errorRegister: null,
      };
    case AuthAction.POST_REGISTER_SUCCESS:
      return {
        ...state,
        isLoadingRegister: false,
        registerData: action.payload,
        errorRegister: null,
      };
    case AuthAction.POST_REGISTER_ERROR:
      return {
        ...state,
        isLoadingRegister: false,
        registerData: null,
        errorRegister: action.payload,
      };
    case AuthAction.POST_REGISTER_RESET:
      return {
        ...state,
        isLoadingRegister: false,
        registerData: null,
        errorRegister: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;
