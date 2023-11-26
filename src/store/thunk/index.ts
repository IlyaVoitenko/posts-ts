import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListPosts } from "../../api";
import { Post } from "../../interface";

export const getPostsListThunk = createAsyncThunk(
  "posts/getPostsListThunk",
  async (_, thunkAPI): Promise<Post[]> => {
    try {
      const response = await getListPosts();
      return response;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);
