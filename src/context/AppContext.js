import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [post, setpost] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPost(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setpage(data.page);
      setpost(data.posts);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log(e);
      setpage(1);
      setpost([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  function handlePageChange(page) {
    setpage(page);
    fetchBlogPost(page);
  }

  const value = {
    post,
    setpost,
    loading,
    setLoading,
    page,
    setpage,
    totalPages,
    setTotalPages,
    fetchBlogPost,
    handlePageChange,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
