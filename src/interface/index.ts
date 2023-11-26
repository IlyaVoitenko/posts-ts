export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface PostArray {
  postList: Post[] | null;
}
