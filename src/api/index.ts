import axios from "axios";

export const getListPosts = async () => {
  const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return posts;
};
