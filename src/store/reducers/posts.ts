import { createSlice } from "@reduxjs/toolkit";
import {} from "../../thunk";

const initialState = {
  postList: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(.fulfilled, (state, action) => {
    //   state.postList = [...action.payload];
    // });
    // builder.addCase(.rejected, (state) => {
    //   state.postList = [];
    // });
  },
  reducers: {},
});

export default postsSlice.reducer;
