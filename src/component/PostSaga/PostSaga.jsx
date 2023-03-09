import { useState } from "react";

const PostSaga = () => {
  const [postId, setPostId] = useState("");

  return (
    <>
      <h1>Redux-Saga Middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button>Get Post</button>
    </>
  );
};

export default PostSaga;
