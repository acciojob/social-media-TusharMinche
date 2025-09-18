import React, { useRef } from "react";

const EditPost = ({ post, onUpdatePost }) => {
  const postTitle = useRef();
  const postContent = useRef();

  const handleSave = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...post,
      title: postTitle.current.value,
      content: postContent.current.value,
    };
    onUpdatePost(updatedPost);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSave}>
        <div className="form-row">
          <label>Post Title:</label>
          <input
            id="postTitle"
            type="text"
            defaultValue={post.title}
            ref={postTitle}
          />
          <label>Content:</label>
          <textarea
            id="postContent"
            defaultValue={post.content}
            ref={postContent}
          ></textarea>
          <button type="submit" className="button">
            Save Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
