export interface Action {
  payload?: any;
  type: string;
}

export type Logger = (store: {
  getState: () => void;
}) => (next: (action: Action) => void) => (action: Action) => void;

export type Dispatch = (data: Action) => null;

export interface AuthState {
  isLoadingLogin: boolean;
  authData: null | {
    Email: string;
    Id: number;
    Name: string;
    Token: string;
  };
  errorLogin: any;
  isLoadingRegister: boolean;
  registerData: any;
  errorRegister: any;
}

export enum AuthAction {
  POST_LOGIN_LOADING = "POST_LOGIN_LOADING",
  POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS",
  POST_LOGIN_ERROR = "POST_LOGIN_ERROR",
  POST_LOGIN_RESET = "POST_LOGIN_RESET",
  POST_REGISTER_LOADING = "POST_REGISTER_LOADING",
  POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS",
  POST_REGISTER_ERROR = "POST_REGISTER_ERROR",
  POST_REGISTER_RESET = "POST_REGISTER_RESET",
}

export interface UserState {
  isLoadingUser: boolean;
  userData: any;
  errorUser: any;
}

export enum UserAction {
  GET_USER_LOADING = "GET_USER_LOADING",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
  GET_USER_ERROR = "GET_USER_ERROR",
  GET_USER_RESET = "GET_USER_RESET",
}

export interface TouristState {
  isLoadingTourists: boolean;
  touristsData: any;
  errorTourists: any;
  isLoadingTourist: boolean;
  touristData: any;
  errorTourist: any;
  isLoadingPostTourist: boolean;
  successPostTourist: any;
  errorPostTourist: any;
  isLoadingEditTourist: boolean;
  successEditTourist: any;
  errorEditTourist: any;
  isLoadingDeleteTourist: boolean;
  successDeleteTourist: any;
  errorDeleteTourist: any;
}

export enum TouristAction {
  GET_TOURISTS_LOADING = "GET_TOURISTS_LOADING",
  GET_TOURISTS_SUCCESS = "GET_TOURISTS_SUCCESS",
  GET_TOURISTS_ERROR = "GET_TOURISTS_ERROR",
  GET_TOURISTS_RESET = "GET_TOURISTS_RESET",
  GET_TOURIST_LOADING = "GET_TOURIST_LOADING",
  GET_TOURIST_SUCCESS = "GET_TOURIST_SUCCESS",
  GET_TOURIST_ERROR = "GET_TOURIST_ERROR",
  GET_TOURIST_RESET = "GET_TOURIST_RESET",
  POST_TOURIST_LOADING = "POST_TOURIST_LOADING",
  POST_TOURIST_SUCCESS = "POST_TOURIST_SUCCESS",
  POST_TOURIST_ERROR = "POST_TOURIST_ERROR",
  POST_TOURIST_RESET = "POST_TOURIST_RESET",
  PUT_TOURIST_LOADING = "PUT_TOURIST_LOADING",
  PUT_TOURIST_SUCCESS = "PUT_TOURIST_SUCCESS",
  PUT_TOURIST_ERROR = "PUT_TOURIST_ERROR",
  PUT_TOURIST_RESET = "PUT_TOURIST_RESET",
  DELETE_TOURIST_LOADING = "DELETE_TOURIST_LOADING",
  DELETE_TOURIST_SUCCESS = "DELETE_TOURIST_SUCCESS",
  DELETE_TOURIST_ERROR = "DELETE_TOURIST_ERROR",
  DELETE_TOURIST_RESET = "DELETE_TOURIST_RESET",
}

export interface Reducers {
  auth: AuthState;
  user: UserState;
  tourist: TouristState;
}
