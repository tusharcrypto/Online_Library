import { createSlice } from "@reduxjs/toolkit";
import books from "../books";
const bookslice = createSlice({
  name:"addbooks",
  initialState:{
    items:books.books
  },
  reducers:{
    addbooks:(state,action)=>{
      const {title,author,description,option,image} = action.payload
      state.items[option].push({title,author,description,image})
    
    }
    
  }
});
export const {addbooks} = bookslice.actions;
export default bookslice.reducer;  