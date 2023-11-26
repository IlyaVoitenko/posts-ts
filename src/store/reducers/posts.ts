import { createSlice } from "@reduxjs/toolkit";
import { getPostsListThunk } from "../thunk";
import { PostArray } from "../../interface";

const initialState: PostArray = {
  postList: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPostsListThunk.fulfilled, (state, action) => {
      state.postList = [...action.payload];
    });
    builder.addCase(getPostsListThunk.rejected, (state) => {
      state.postList = [];
    });
  },
  reducers: {},
});

export default postsSlice.reducer;
