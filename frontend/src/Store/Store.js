import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";

const store = configureStore({
    reducer: {
      UserSlice : UserSlice,
    },
  });
  
  export default store;