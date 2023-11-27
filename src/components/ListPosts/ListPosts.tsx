import { useEffect } from "react";
import { getPostsListThunk } from "../../store/thunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { listPostsSelector } from "../../store/selectors";
import PostItem from "../PostItem";

const ListPosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const listPosts = useSelector(listPostsSelector);

  useEffect(() => {
    dispatch(getPostsListThunk());
  }, [dispatch]);

  return (
    <div>
      {listPosts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPosts;
