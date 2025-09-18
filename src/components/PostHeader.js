import React from "react";
import { Link } from "react-router-dom";

const PostHeader = () => {
  return (
    <header className="header">
      <h1 className="logo">GenZ</h1>
      <nav className="nav">
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/notifications">Notifications</Link>
      </nav>
    </header>
  );
};

export default PostHeader;
