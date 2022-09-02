import { UPDATE_NUMBER } from "../actionTypes/actionTypes";
import { UPDATE_REGION } from "../actionTypes/actionTypes";

const updateNumber = () => {
  return {
    type: UPDATE_NUMBER,
  };
};

export { updateNumber };

const updateRegion = () => {
  return {
    type: UPDATE_REGION,
  };
};

export { updateRegion };