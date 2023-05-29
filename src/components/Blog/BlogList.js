import React from 'react'
import Masonry from 'react-masonry-css'
import { breakpointsBlog } from '../constant/allTools'

const BlogList = () => {
  return (
    <section class="section">
      <div class="container">
        <Masonry
          breakpointCols={breakpointsBlog}
          className="my-masonry-grid row"
          columnClassName="my-masonry-grid_column"
          type="ul"
          percentPosition="true"
        >
          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-01.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Creativity</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>What planning process needs</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-01.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Rebecca Swartz</h6></a>
                    <p class="text-muted fs-14 mb-0">Project Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-06.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Product</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>How to get creative in your work?</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-02.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Gabriel Palmer </h6></a>
                    <p class="text-muted fs-14 mb-0">Education Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-02.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Digital</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>Design your apps in your own way</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-03.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Betty Richards </h6></a>
                    <p class="text-muted fs-14 mb-0">Executive, HR Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-07.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Business</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>Do traditional landing pages work for Saas startups?</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-04.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">MichaeL Drake </h6></a>
                    <p class="text-muted fs-14 mb-0">Full Stack Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-08.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Design</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>Smartest Applications for Business</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-05.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Olivia Murphy</h6></a>
                    <p class="text-muted fs-14 mb-0">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="ratio ratio-16x9">  <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen></iframe>  </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Digital, Business</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>A day in the of a professional fashion designer</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-06.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Brooke Hayes</h6></a>
                    <p class="text-muted fs-14 mb-0">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-03.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Business</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>A day in the of a professional fashion designer</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-07.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Jeffrey Montgomery</h6></a>
                    <p class="text-muted fs-14 mb-0">Creative Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-09.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Product</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>A day in the of a professional fashion designer</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-08.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Cerys Woods</h6></a>
                    <p class="text-muted fs-14 mb-0">Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-4">
            <div class="card blog-masonry-box shadow overflow-hidden border-0 p-2">
              <div class="overflow-hidden">
                <img src="./img/blog/img-10.jpg" alt="" class="img-fluid blog-img" />
              </div>
              <div class="card-body p-4">
                <p class="text-muted mb-2"><b>Fashion, Product</b> <i class="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                <a href="blog-details.html" class="primary-link"><h5>A day in the of a professional fashion designer</h5></a>
                <div class="d-flex align-items-center mt-4">
                  <div class="flex-shrink-0">
                    <img src="assets/images/user/img-09.jpg" alt="" class="avatar-xs rounded-circle" />
                  </div>
                  <div class="ms-3">
                    <a href="blog-author.html" class="primary-link"><h6 class="fs-16 mb-1">Charles Dickens</h6></a>
                    <p class="text-muted fs-14 mb-0">Creative Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Masonry>
      </div>
    </section>
  )
}

export default BlogList