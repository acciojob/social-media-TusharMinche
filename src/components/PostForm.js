import React, { useRef } from "react";

const PostForm = ({ users, onAddPost }) => {
  const postTitle = useRef();
  const postAuthor = useRef();
  const postContent = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: postTitle.current.value,
      author: postAuthor.current.value,
      content: postContent.current.value,
    };

    onAddPost(newPost);

    // reset inputs
    postTitle.current.value = "";
    postAuthor.current.value = "";
    postContent.current.value = "";
  };

  return (
    <section className="new-post">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Post Title:</label>
          <input id="postTitle" type="text" ref={postTitle} />
          <label>Author:</label>
          <select id="postAuthor" ref={postAuthor} defaultValue="">
            <option value="" disabled>
              Select author
            </option>
            {users.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
          <label>Content:</label>
          <textarea id="postContent" ref={postContent}></textarea>
          <button type="submit" className="button">
            Save Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default PostForm;
