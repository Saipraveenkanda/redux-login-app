import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import registerReducer from "./registerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
  },
});
export default store;
