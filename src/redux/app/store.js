import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './../root/combineReducers'

export default configureStore({
  reducer: rootReducer,
});