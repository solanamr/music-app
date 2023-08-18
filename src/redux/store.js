import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./states/blog/blogSlice";

export default configureStore({
  reducer: {
    blog: blogSlice,
  },
});