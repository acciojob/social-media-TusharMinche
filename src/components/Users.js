import React from "react";
import { Link } from "react-router-dom";

export default function Users({ users }) {
  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map((u, idx) => (
          <li key={idx}>
            <Link to={`/users/${idx}`}>{u}</Link>  {/* ✅ Cypress expects <a> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
