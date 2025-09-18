
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
      <label>Post Title:</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
      />

      <label>Author:</label>
      <select value={author} onChange={(e) => setAuthor(e.target.value)}>
        {users.map((u, idx) => (
          <option key={idx} value={u}>
            {u}
          </option>
        ))}
      </select>

      <label>Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write something..."
      />

      {/* ✅ Cypress expects button inside form */}
      <button type="submit">Save Post</button>
    </form>
  );
}
