import { useContext, useEffect, useRef } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css";
export default function App() {
  useEffect(() => {
    fetchBlogPost();
  }, []);

  const { fetchBlogPost } = useContext(AppContext);

  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
