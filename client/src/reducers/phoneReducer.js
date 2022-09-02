import { UPDATE_NUMBER } from "../actionTypes/actionTypes";

const initialState = {
  currentPhone: '',
};

export default function phoneReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_NUMBER:
      return {
        ...state,
        currentPhone: action.payload,
      };

    default:
      return state;
  }
};