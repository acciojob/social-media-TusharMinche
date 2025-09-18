import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./../styles/App.css";

import PostHeader from "./PostHeader";
import PostForm from "./PostForm";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import User from "./User";
import Post from "./Post";


const preDefinedPosts = [
  {
    id: 0,
    title: "Hello World",
    author: "Uriah Pagac",
    content: "This is my first post!",
    reactions: { thumbsUp: 2, hooray: 1, heart: 3, rocket: 0, eyes: 0 },
  },
  {
    id: 1,
    title: "React Learning",
    author: "Lauren Bednar",
    content: "Just started learning React, it’s awesome 🚀",
    reactions: { thumbsUp: 1, hooray: 0, heart: 2, rocket: 2, eyes: 0 },
  },
  {
    id: 2,
    title: "Weekend Vibes",
    author: "Magnus Gislason",
    content: "Enjoying the weekend with friends 🌸",
    reactions: { thumbsUp: 0, hooray: 1, heart: 1, rocket: 0, eyes: 0 },
  },
];



function App() {
  const [posts, setPosts] = useState(preDefinedPosts);
  const [users] = useState(["Uriah Pagac", "Lauran Bednar", "Magnus Gislason"]);
  const [notifications, setNotifications] = useState([]);

  // 👇 wrapper to add new posts
  const onAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <h1>GenZ</h1> 
      <PostHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PostForm users={users} onAddPost={onAddPost} />
              <Posts posts={posts} />
            </>
          }
        />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:id" element={<User users={users} posts={posts} />} />
        <Route
          path="/notifications"
          element={
            <Notifications
              notifications={notifications}
              setNotifications={setNotifications}
            />
          }
        />
        <Route path="/posts/:id" element={<Post posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
}


export default App;
