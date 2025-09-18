import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/users/${index}`}>{user}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
