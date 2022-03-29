import { Action, TouristAction, TouristState } from "../types";

const initState: TouristState = {
  isLoadingTourists: false,
  touristsData: null,
  errorTourists: null,
  isLoadingTourist: false,
  touristData: null,
  errorTourist: null,
  isLoadingPostTourist: false,
  successPostTourist: null,
  errorPostTourist: null,
  isLoadingEditTourist: false,
  successEditTourist: null,
  errorEditTourist: null,
  isLoadingDeleteTourist: false,
  successDeleteTourist: null,
  errorDeleteTourist: null,
};

const tourist = (state = initState, action: Action) => {
  switch (action.type) {
    case TouristAction.GET_TOURISTS_LOADING:
      return {
        ...state,
        isLoadingTourists: true,
        errorTourists: null,
      };
    case TouristAction.GET_TOURISTS_SUCCESS:
      return {
        ...state,
        isLoadingTourists: false,
        touristsData: action.payload,
        errorTourists: null,
      };
    case TouristAction.GET_TOURISTS_ERROR:
      return {
        ...state,
        isLoadingTourists: false,
        errorTourists: action.payload,
      };
    case TouristAction.GET_TOURISTS_RESET:
      return {
        ...state,
        isLoadingTourists: false,
        touristsData: null,
        errorTourists: null,
      };

    case TouristAction.GET_TOURIST_LOADING:
      return {
        ...state,
        isLoadingTourist: true,
        touristData: null,
        errorTourist: null,
      };
    case TouristAction.GET_TOURIST_SUCCESS:
      return {
        ...state,
        isLoadingTourist: false,
        touristData: action.payload,
        errorTourist: null,
      };
    case TouristAction.GET_TOURIST_ERROR:
      return {
        ...state,
        isLoadingTourist: false,
        touristData: null,
        errorTourist: action.payload,
      };
    case TouristAction.GET_TOURIST_RESET:
      return {
        ...state,
        isLoadingTourist: false,
        touristData: null,
        errorTourist: null,
      };

    case TouristAction.POST_TOURIST_LOADING:
      return {
        ...state,
        isLoadingPostTourist: true,
        successPostTourist: null,
        errorPostTourist: null,
      };
    case TouristAction.POST_TOURIST_SUCCESS:
      return {
        ...state,
        isLoadingPostTourist: false,
        successPostTourist: action.payload,
        errorPostTourist: null,
      };
    case TouristAction.POST_TOURIST_ERROR:
      return {
        ...state,
        isLoadingPostTourist: false,
        successPostTourist: null,
        errorPostTourist: action.payload,
      };
    case TouristAction.POST_TOURIST_RESET:
      return {
        ...state,
        isLoadingPostTourist: false,
        successPostTourist: null,
        errorPostTourist: null,
      };

    case TouristAction.PUT_TOURIST_LOADING:
      return {
        ...state,
        isLoadingEditTourist: true,
        successEditTourist: null,
        errorEditTourist: null,
      };
    case TouristAction.PUT_TOURIST_SUCCESS:
      return {
        ...state,
        isLoadingEditTourist: false,
        successEditTourist: action.payload,
        errorEditTourist: null,
      };
    case TouristAction.PUT_TOURIST_ERROR:
      return {
        ...state,
        isLoadingEditTourist: false,
        successEditTourist: null,
        errorEditTourist: action.payload,
      };
    case TouristAction.PUT_TOURIST_RESET:
      return {
        ...state,
        isLoadingEditTourist: false,
        successEditTourist: null,
        errorEditTourist: null,
      };

    case TouristAction.DELETE_TOURIST_LOADING:
      return {
        ...state,
        isLoadingDeleteTourist: true,
        successDeleteTourist: null,
        errorDeleteTourist: null,
      };
    case TouristAction.DELETE_TOURIST_SUCCESS:
      return {
        ...state,
        isLoadingDeleteTourist: false,
        successDeleteTourist: action.payload,
        errorDeleteTourist: null,
      };
    case TouristAction.DELETE_TOURIST_ERROR:
      return {
        ...state,
        isLoadingDeleteTourist: false,
        successDeleteTourist: null,
        errorDeleteTourist: action.payload,
      };
    case TouristAction.DELETE_TOURIST_RESET:
      return {
        ...state,
        isLoadingDeleteTourist: false,
        successDeleteTourist: null,
        errorDeleteTourist: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default tourist;
