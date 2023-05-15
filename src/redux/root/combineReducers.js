import { combineReducers } from "@reduxjs/toolkit"
import loginUserReducer from './../features/user/userSlice'
import manejadorReducer from "../features/manejadorMenu/manejadorSlice";

const rootReducer = combineReducers({
  user: loginUserReducer,
  manejadorMenu: manejadorReducer
});

export default rootReducer;