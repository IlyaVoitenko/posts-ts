import style from "./style.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createPost } from "../../api";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  return (
    <div className={style.comtainer}>
      <input
        placeholder="title"
        onChange={({ target }) => setTitle(target.value)}
      />
      <input
        placeholder="body"
        onChange={({ target }) => setBody(target.value)}
      />
      <button
        onClick={() => {
          const id: string = uuidv4();
          const userId: string = uuidv4();

          createPost({ title, body, userId });
          console.log(title, " ", body, " ", id);
        }}
      >
        add post
      </button>
    </div>
  );
};

export default CreatePost;
