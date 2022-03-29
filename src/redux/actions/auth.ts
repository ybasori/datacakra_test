import api from "../../configs/api";
import { Dispatch, AuthAction } from "../types";

export const reAuthenticate = () => (dispatch: Dispatch) => {
  dispatch({ type: AuthAction.POST_LOGIN_LOADING });
  if (localStorage.getItem("auth")) {
    let userString = localStorage.getItem("auth") || "{}";
    dispatch({
      type: AuthAction.POST_LOGIN_SUCCESS,
      payload: JSON.parse(userString),
    });
  } else {
    dispatch({
      type: AuthAction.POST_LOGIN_ERROR,
      payload: true,
    });
  }
};

export const postAuthLogin =
  (formData: { email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: AuthAction.POST_LOGIN_LOADING });
      const result = await api.postAuthLogin(formData);
      const res = await result.json();

      if (result.status < 400 && res.data != null) {
        localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({
          type: AuthAction.POST_LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: AuthAction.POST_LOGIN_ERROR,
          payload: res.message,
        });
      }
    } catch (err) {
      dispatch({
        type: AuthAction.POST_LOGIN_ERROR,
        payload: err,
      });
    }
  };

export const resetAuthLogin = () => (dispatch: Dispatch) => {
  dispatch({
    type: AuthAction.POST_LOGIN_RESET,
  });
};

export const postAuthRegister =
  (formData: { name: string; email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: AuthAction.POST_REGISTER_LOADING });
      const result = await api.postAuthRegister(formData);
      const res = await result.json();

      if (result.status < 400) {
        dispatch({
          type: AuthAction.POST_REGISTER_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: AuthAction.POST_REGISTER_ERROR,
          payload: res.message,
        });
      }
    } catch (err) {
      dispatch({
        type: AuthAction.POST_REGISTER_ERROR,
        payload: err,
      });
    }
  };

export const resetAuthRegister = () => (dispatch: Dispatch) => {
  dispatch({
    type: AuthAction.POST_REGISTER_RESET,
  });
};
