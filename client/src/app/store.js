import { configureStore } from '@reduxjs/toolkit';
import phoneReducer  from '../reducers/phoneReducer';
import regionReducer from '../reducers/regionReducer';

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
    region: regionReducer
  },
});
