import api from "../../configs/api";
import { Dispatch, Reducers, TouristAction } from "../types";

export const getDataTourists =
  (page: number) => async (dispatch: Dispatch, getState: () => Reducers) => {
    try {
      const { auth } = getState();
      dispatch({ type: TouristAction.GET_TOURISTS_LOADING });
      const result = await api.getTouristsData(
        page,
        auth.authData?.Token || ""
      );
      const res = await result.json();

      if (result.status < 400) {
        dispatch({
          type: TouristAction.GET_TOURISTS_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: TouristAction.GET_TOURISTS_ERROR,
          payload: res,
        });
      }
    } catch (err) {
      dispatch({
        type: TouristAction.GET_TOURISTS_ERROR,
        payload: err,
      });
    }
  };

export const resetDataTourists = () => (dispatch: Dispatch) => {
  dispatch({
    type: TouristAction.GET_TOURISTS_RESET,
  });
};

export const getDataTourist =
  (id: string) => async (dispatch: Dispatch, getState: () => Reducers) => {
    try {
      const { auth } = getState();
      dispatch({ type: TouristAction.GET_TOURIST_LOADING });
      const result = await api.getTouristData(id, auth.authData?.Token || "");
      const res = await result.json();

      if (result.status < 400) {
        dispatch({
          type: TouristAction.GET_TOURIST_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: TouristAction.GET_TOURIST_ERROR,
          payload: res,
        });
      }
    } catch (err) {
      dispatch({
        type: TouristAction.GET_TOURIST_ERROR,
        payload: err,
      });
    }
  };

export const resetDataTourist = () => (dispatch: Dispatch) => {
  dispatch({
    type: TouristAction.GET_TOURIST_RESET,
  });
};

export const postDataTourist =
  (form: {
    tourist_name: string;
    tourist_email: string;
    tourist_location: string;
  }) =>
  async (dispatch: Dispatch, getState: () => Reducers) => {
    try {
      const { auth } = getState();
      dispatch({ type: TouristAction.POST_TOURIST_LOADING });
      const result = await api.postTouristData(
        form,
        auth.authData?.Token || ""
      );
      const res = await result.json();

      if (result.status < 400) {
        dispatch({
          type: TouristAction.POST_TOURIST_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: TouristAction.POST_TOURIST_ERROR,
          payload: res,
        });
      }
    } catch (err) {
      dispatch({
        type: TouristAction.POST_TOURIST_ERROR,
        payload: err,
      });
    }
  };

export const resetPostDataTourist = () => (dispatch: Dispatch) => {
  dispatch({
    type: TouristAction.POST_TOURIST_RESET,
  });
};

export const editDataTourist =
  (form: {
    id: number;
    tourist_name: string;
    tourist_email: string;
    tourist_location: string;
  }) =>
  async (dispatch: Dispatch, getState: () => Reducers) => {
    try {
      const { auth } = getState();
      dispatch({ type: TouristAction.PUT_TOURIST_LOADING });
      const result = await api.putTouristData(form, auth.authData?.Token || "");
      const res = await result.json();

      if (result.status < 400) {
        dispatch({
          type: TouristAction.PUT_TOURIST_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: TouristAction.PUT_TOURIST_ERROR,
          payload: res,
        });
      }
    } catch (err) {
      dispatch({
        type: TouristAction.PUT_TOURIST_ERROR,
        payload: err,
      });
    }
  };

export const resetEditDataTourist = () => (dispatch: Dispatch) => {
  dispatch({
    type: TouristAction.PUT_TOURIST_RESET,
  });
};

export const deleteDataTourist =
  (id: string) => async (dispatch: Dispatch, getState: () => Reducers) => {
    try {
      const { auth } = getState();
      dispatch({ type: TouristAction.DELETE_TOURIST_LOADING });
      const result = await api.deleteTouristData(
        id,
        auth.authData?.Token || ""
      );
      const res = await result.json();

      if (result.status < 400) {
        dispatch({
          type: TouristAction.DELETE_TOURIST_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: TouristAction.DELETE_TOURIST_ERROR,
          payload: res,
        });
      }
    } catch (err) {
      dispatch({
        type: TouristAction.DELETE_TOURIST_ERROR,
        payload: err,
      });
    }
  };

export const resetDeleteDataTourist = () => (dispatch: Dispatch) => {
  dispatch({
    type: TouristAction.DELETE_TOURIST_RESET,
  });
};
