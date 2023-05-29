import React from 'react'
import BlogList from '../components/Blog/BlogList'

const Blog = () => {
  return (
    <div className='page-wrapper'>
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Blog</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i></li>
                  <li >Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogList />
    </div>
  )
}

export default Blog