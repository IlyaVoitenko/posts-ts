import { Post } from "../../interface";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <div>
      <p>title: {post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
