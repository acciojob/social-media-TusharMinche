
import { NavLink } from "react-router-dom";

export default function PostHeader() {
  return (
    <nav>
      <NavLink to="/" data-cy="posts-tab">Posts</NavLink>
      <NavLink to="/users" data-cy="users-tab">Users</NavLink>
      <NavLink to="/notifications" data-cy="notifications-tab">Notifications</NavLink>
    </nav>
  );
}
