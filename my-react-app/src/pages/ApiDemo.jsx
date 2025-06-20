import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ApiDemo() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const q = query.toLowerCase();
    const result = posts.filter(p =>
      p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
    );
    setFiltered(result);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">API Demo: Posts</h2>

      <div className="flex gap-2">
        <input
          className="border p-2 rounded flex-grow dark:bg-gray-700"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(post => (
          <Card key={post.id}>
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-sm">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
