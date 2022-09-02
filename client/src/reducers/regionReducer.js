import { UPDATE_REGION } from "../actionTypes/actionTypes";

const initialState = {
  currentRegion: ''
};

export default function phoneReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_REGION:
        return {
            ...state,
            currentRegion: action.payload,
          };

    default:
      return state;
  }
};