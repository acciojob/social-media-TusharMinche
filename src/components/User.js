import React from "react";
import { Link, useParams } from "react-router-dom";

const User = ({ users, posts }) => {
  const { id } = useParams();
  const user = users[id];

  return (
    <div>
      <h2>{user}</h2>
      <ul>
        {posts.map(
          (post, index) =>
            post.author === user && (
              <li key={index}>
                <Link to={`/posts/${index}`}>{post.title}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default User;
