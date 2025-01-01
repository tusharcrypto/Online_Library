import { configureStore } from "@reduxjs/toolkit";
import bookslice from "./bookslice";
const bookstore = configureStore({
  reducer:{
   addbooks:bookslice
  }
});

export default bookstore;