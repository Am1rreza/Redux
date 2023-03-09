import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../../redux/posts/postActions";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { loading, error, data } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux-Saga Middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostRequest(postId || 1))}>
        Get Post
      </button>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <p>{error}</p>
      ) : data.title ? (
        <div>
          <p>post title: {data.title}</p>
          <p>post body: {data.body}</p>
        </div>
      ) : (
        <p>fetch some post !</p>
      )}
    </>
  );
};

export default PostSaga;
