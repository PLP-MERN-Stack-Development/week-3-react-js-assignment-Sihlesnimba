import { Link } from "react-router-dom";
import { useTheme } from "../context/useTheme";


export default function Navbar() {
  const { toggleTheme } = useTheme(); 

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex flex-col sm:flex-row sm:justify-between items-center animate-fade-in">
      <div className="font-bold text-lg">TaskApp</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api-demo" className="hover:underline">API Demo</Link>

        <button onClick={toggleTheme} className="ml-4 underline text-sm">
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
