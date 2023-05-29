import React, { useState, useEffect } from 'react';
import { slideStetting1 } from '../constant/allTools';
import "slick-carousel/slick/slick.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../contexts/AuthContext";
import Slider from 'react-slick';
import BlogCard from './BlogCard';

const BlogSlider = () => {
  const { currentUser } = useAuth()
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogRef = collection(db, "Blogs");
    const q = query(blogRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogs);
    });
  }, []);

  return (
    <section className="blog p-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <a href="/blog">
                <span>Blog</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <Slider
              className="slick-arrow-style slick-arrow-style_hero slick-dot-style row"
              prevArrow={
                <button type="button" className="slick-prev slick-arrow">
                  {"<"}
                </button>
              }
              nextArrow={
                <button type="button" className="slick-next slick-arrow">
                  {">"}
                </button>
              }
              {...slideStetting1}
            >
              {blogs.length > 0 &&
                blogs
                  .slice(0, 4)
                  .map((blog) => (
                    <BlogCard blog={blog} key={blog.id} user={currentUser} />
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSlider