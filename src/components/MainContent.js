import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setLoading } from "../slice";

function MainContent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        console.log("res", res.data);
        setBlogs(...blogs, res.data?.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container px-4 px-lg-5">
      {blogs &&
        blogs.map((blog) => {
          return (
            <>
              {/* Post preview */}
              <div className="post-preview" key={blog.id}>
                <Link to="/">
                  <h2 className="post-title">{blog.title}</h2>
                  <h3 className="post-subtitle">{blog.body.slice(1, 90)}...</h3>
                </Link>
                <p className="post-meta">
                  Posted by
                  <a href="#!"> User Id: {blog.userId} </a>
                  on September 24, 2022
                </p>
              </div>
              <hr className="my-4" />
            </>
          );
        })}
      <div class="d-flex justify-content-end mb-4">
        <a class="btn btn-primary text-uppercase" href="#!">
          Older Posts →
        </a>
      </div>
    </div>
  );
}

export default MainContent;
