import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  // consume the data from the context
  const { post, loading } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (
        post.map((post) => (
          <div key={post.id}>
            <p className=""> {post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <div className="mb-5">
              {post.tags.map((tag) => (
                <span className=" ">{`#${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
