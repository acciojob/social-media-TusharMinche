import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditPost from "./EditPost";

const Post = ({ posts, setPosts }) => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const post = posts[id];

  const onUpdatePost = (updatedPost) => {
    const updatedPosts = posts.map((p, index) =>
      index === Number(id) ? updatedPost : p
    );
    setPosts(updatedPosts);
    setIsEdit(false);
  };

  return (
    <div className="post">
      {isEdit ? (
        <EditPost post={post} onUpdatePost={onUpdatePost} />
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>by {post.author}</p>
          <p>{post.content}</p>
          <button className="button" onClick={() => setIsEdit(true)}>
            Edit Post
          </button>
        </>
      )}
    </div>
  );
};

export default Post;
