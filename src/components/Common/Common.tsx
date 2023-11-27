import style from "./style.module.css";
import ListPosts from "../ListPosts";
import CreatePost from "../CreatePost";

const Common = () => {
  return (
    <div className={style.container}>
      <CreatePost />
      <ListPosts />
    </div>
  );
};

export default Common;
