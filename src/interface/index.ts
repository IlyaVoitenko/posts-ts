export interface newPost {
  userId: number | string;
  title: string;
  body: string;
}

export interface Post extends newPost {
  id: number;
}
export interface PostArray {
  postList: Post[] | null;
  newPost: Post | null;
}
