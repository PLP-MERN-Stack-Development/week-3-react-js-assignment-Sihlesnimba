import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./pages/TaskManager"
import ApiDemo from "./pages/ApiDemo";

function Home() {
  return <h1 className="text-2xl font-bold">Welcome to TaskApp</h1>;
}

function Tasks() {
  return <h1 className="text-2xl font-bold">Tasks Page</h1>;
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api-demo" element={<ApiDemo />} />
      </Routes>
    </Layout>
  );
}

export default App;
