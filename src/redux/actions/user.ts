import api from "../../configs/api";
import { AuthAction, Dispatch, Reducers, UserAction } from "../types";

export const getDataUser =
  (id: number) => async (dispatch: Dispatch, getState: () => Reducers) => {
    try {
      const { auth } = getState();
      dispatch({ type: UserAction.GET_USER_LOADING });
      const result = await api.getUserData(id, auth.authData?.Token || "");
      const res = await result.json();

      if (result.status < 400) {
        dispatch({
          type: UserAction.GET_USER_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: UserAction.GET_USER_ERROR,
          payload: res,
        });
        if (result.status === 401) {
          dispatch({
            type: AuthAction.POST_LOGIN_RESET,
          });
        }
      }
    } catch (err) {
      dispatch({
        type: UserAction.GET_USER_ERROR,
        payload: err,
      });
    }
  };

export const resetDataUser = () => (dispatch: Dispatch) => {
  dispatch({
    type: UserAction.GET_USER_RESET,
  });
};
