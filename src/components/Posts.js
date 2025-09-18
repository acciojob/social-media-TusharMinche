import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <section className="posts">
      <h2>Posts</h2>
      <div className="posts-list">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p className="author">by {post.author}</p>
            <p className="content">{post.content}</p>

            <div className="reactions">
              <button>👍 0</button>
              <button>🎉 0</button>
              <button>❤️ 0</button>
              <button>🚀 0</button>
              <button>👀 0</button>
            </div>

            <Link to={`/posts/${index}`} className="button">
              View Post
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
