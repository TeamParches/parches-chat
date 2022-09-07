import { configureStore } from "@reduxjs/toolkit"
import alertMessageReducer from "../slicers/alertMessageSlice"
import userLoggedReducer from "../slicers/userLoggedSlice"
import loaderReducer from "../slicers/loaderSlice"
import gropsReducer from "../slicers/groupsSlice"

export const store = configureStore({
  reducer: {
    alertMessage: alertMessageReducer,
    loader: loaderReducer,
    userLogged: userLoggedReducer,
    groups: gropsReducer
  }
})
