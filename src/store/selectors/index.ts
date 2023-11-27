import { RootState } from "../index";

export const listPostsSelector = (state: RootState) => state.posts.postList;
