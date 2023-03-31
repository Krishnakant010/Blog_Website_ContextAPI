import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  // consume the data from the context
  const { post, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7">
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (
        post.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-lg"> {post.title}</p>
            <p className="text-[15px]">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-[13px]">Posted on {post.date}</p>
            <p className="text-[18px] mt-[10px]">{post.content}</p>
            <div className="text-blue-500 underline text-[14px] text-bold flex gap-x-2">
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
