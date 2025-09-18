import React, { useState } from "react";

export default function PostForm({ users, onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(users[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddPost({ title, content, author });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Post Title:</label>
      <input
        id="postTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="postAuthor">Author:</label>
      <select
        id="postAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        {users.map((u, idx) => (
          <option key={idx} value={u}>
            {u}
          </option>
        ))}
      </select>

      <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent" 
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Save Post</button>
    </form>
  );
}
