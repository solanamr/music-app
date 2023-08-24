import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./states/blog/blogSlice";
import usersSlice from "./states/users/usersSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    blogs: blogSlice,
  },
});