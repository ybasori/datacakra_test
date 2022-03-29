import { Action, UserAction, UserState } from "../types";

const initState: UserState = {
  isLoadingUser: false,
  userData: null,
  errorUser: null,
};

const user = (state = initState, action: Action) => {
  switch (action.type) {
    case UserAction.GET_USER_LOADING:
      return {
        ...state,
        isLoadingUser: true,
        userData: null,
        errorUser: null,
      };
    case UserAction.GET_USER_SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
        userData: action.payload,
        errorUser: null,
      };
    case UserAction.GET_USER_ERROR:
      return {
        ...state,
        isLoadingUser: false,
        userData: null,
        errorUser: action.payload,
      };
    case UserAction.GET_USER_RESET:
      return {
        ...state,
        isLoadingUser: false,
        userData: null,
        errorUser: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
