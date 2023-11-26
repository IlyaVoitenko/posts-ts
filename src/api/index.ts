import axios from "axios";
import { Post } from "../interface";

export const getListPosts = async (): Promise<Post[]> => {
  const posts = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return posts.data;
};
