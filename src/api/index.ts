import axios from "axios";
import { Post, newPost } from "../interface";

export const getListPosts = async (): Promise<Post[]> => {
  const posts = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return posts.data;
};

export const createPost = async (newPos: newPost): Promise<Post> => {
  const option = {
    method: "POST",
    body: JSON.stringify(newPos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/posts`,
    option
  );
  console.log(response.data);
  return response.data;
};
