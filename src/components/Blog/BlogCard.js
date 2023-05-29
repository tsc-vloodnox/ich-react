import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-box card p-2 mt-3">
      <div className="blog-img position-relative overflow-hidden">
        <img src={blog.img} alt="blog-pic" className="img-fluid" />
        <div className="bg-overlay"></div>
        <div className="author">
          <p className=" mb-0"><i className="mdi mdi-account text-light"></i> <a href="javascript:void(0)"
            className="text-light user">{blog.createdBy}</a></p>
          <p className="text-light mb-0 date"><i className="mdi mdi-calendar-check"></i>{blog.createdAt}</p>
        </div>
        <div className="likes">
          <ul className="list-unstyled mb-0">
            <li className="list-inline-item"><a href="javascript:void(0)" className="text-white"><i
              className="mdi mdi-heart-outline me-1"></i> {blog.likes.length}</a></li>
            <li className="list-inline-item"><a href="javascript:void(0)" className="text-white"><i
              className="mdi mdi-comment-outline me-1"></i>{blog.comments.length}</a></li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <a href="blog/blog-details" className="primary-link">
          <h5 className="fs-17">{blog.title}</h5>
        </a>
        <p className="text-muted">{blog.subtitle}</p>
        <a href="blog/blog-details" className="form-text text-primary">Read more <i className="mdi mdi-chevron-right align-middle"></i></a>
      </div>
    </div>
  )
}

export default BlogCard