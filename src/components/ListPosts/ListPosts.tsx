import { useEffect } from "react";
import { getPostsListThunk } from "../../store/thunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

const ListPosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPostsListThunk());
  }, [dispatch]);

  return <div>ListPosts</div>;
};

export default ListPosts;
