import React from 'react'

const CandidateDetails = () => {
  return (
    <div className='page-wrapper'>
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Candidate Details</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i></li>
                  <li >Candidate Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card side-bar">
                <div className="card-body p-4">
                  <div className="candidate-profile text-center">
                    <img src="/img/img-01.jpg" alt="" className="avatar-lg rounded-circle" />
                    <h6 className="fs-18 mb-0 mt-4">Gabriel Palmer</h6>
                    <p className="text-muted mb-4">Creative Designer</p>
                    <ul className="candidate-detail-social-menu list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link"><i className="uil uil-twitter-alt"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link"><i className="uil uil-whatsapp"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link"><i className="uil uil-phone-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="candidate-profile-overview  card-body border-top p-4">
                  <h6 className="fs-17 fw-semibold mb-3">Profile Overview</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="d-flex">
                        <label className="text-dark">Categories</label>
                        <div>
                          <p className="text-muted mb-0">Accounting / Finance</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <label className="text-dark">Offered Salary</label>
                        <div>
                          <p className="text-muted mb-0">$450 per hour</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <label className="text-dark">Languages</label>
                        <div>
                          <p className="text-muted mb-0">English, Turkish, Japanese</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <label className="text-dark">Experience</label>
                        <div>
                          <p className="text-muted mb-0">3 Years</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <label className="text-dark">Qualification</label>
                        <div>
                          <p className="text-muted mb-0">Associate Degree</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <label className="text-dark">Views</label>
                        <div>
                          <p className="text-muted mb-0">2574</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <a href="javascript:void(0)" className="btn btn-danger btn-hover w-100"><i className="uil uil-phone"></i> Voir CV</a>
                    <a href="javascript:void(0)" className="btn btn-primary btn-hover w-100 mt-2"><i className="uil uil-import"></i> Download CV</a>
                  </div>
                  <ul className="list-inline d-flex justify-content-between align-items-center mb-0 mt-2">
                    <li className="list-inline-item text-warning review-rating">
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star-half-full"></i>
                    </li>
                    <li className="list-inline-item">
                      <div className="favorite-icon">
                        <a href="javascript:void(0)"><i className="uil uil-heart-alt fs-18"></i></a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-4 border-top">
                  <h6 className="fs-17 fw-semibold mb-3">Professional Skills</h6>
                  <div>
                    <span className="badge bg-soft-success fs-13 mt-1">User Interface Design</span>
                    <span className="badge bg-soft-success fs-13 mt-1">Web Design</span>
                    <span className="badge bg-soft-success fs-13 mt-1">Responsive Design</span>
                    <span className="badge bg-soft-success fs-13 mt-1">Mobile App Design</span>
                    <span className="badge bg-soft-success fs-13 mt-1">UI Design</span>
                  </div>
                </div>
                <div className="candidate-contact-details card-body p-4 border-top">
                  <h6 className="fs-17 fw-semibold mb-3">Contact Details</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="d-flex align-items-center mt-4">
                        <div className="icon bg-soft-primary flex-shrink-0">
                          <i className="uil uil-envelope-alt"></i>
                        </div>
                        <div className="ms-3">
                          <h6 className="fs-14 mb-1">Email</h6>
                          <p className="text-muted mb-0">gabrielpalmer@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center mt-4">
                        <div className="icon bg-soft-primary flex-shrink-0">
                          <i className="uil uil-map-marker"></i>
                        </div>
                        <div className="ms-3">
                          <h6 className="fs-14 mb-1">Address</h6>
                          <p className="text-muted mb-0">Dodge City, Louisiana</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center mt-4">
                        <div className="icon bg-soft-primary flex-shrink-0">
                          <i className="uil uil-phone"></i>
                        </div>
                        <div className="ms-3">
                          <h6 className="fs-14 mb-1">Phone</h6>
                          <p className="text-muted mb-0">+1(452) 125-6789</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center mt-4">
                        <div className="icon bg-soft-primary flex-shrink-0">
                          <i className="uil uil-skype-alt"></i>
                        </div>
                        <div className="ms-3">
                          <h6 className="fs-14 mb-1">Skype</h6>
                          <p className="text-muted mb-0">@gabrielpalmer</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card candidate-details ms-lg-4 mt-4 mt-lg-0">
                <div className="card-body p-4 candidate-personal-detail">
                  <div>
                    <h6 className="fs-17 fw-semibold mb-3">About Me</h6>
                    <p className="text-muted mb-2">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                      shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <p className="text-muted mb-0">As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>
                  </div>
                  <div className="candidate-education-details mt-4 pt-3">
                    <h6 className="fs-17 fw-bold mb-0">Education</h6>
                    <div className="candidate-education-content mt-4 d-flex">
                      <div className="circle flex-shrink-0 bg-soft-primary"><span></span></div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">BCA - Bachelor of Computer Applications</h6>
                        <p className="mb-2 text-muted">International University - (2004 - 2010)</p>
                        <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                      </div>
                    </div>
                    <div className="candidate-education-content mt-4 d-flex">
                      <div className="circle flex-shrink-0 bg-soft-primary"><span></span></div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">MCA - Master of Computer Application</h6>
                        <p className="mb-2 text-muted">International University - (2010 - 2012)</p>
                        <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                      </div>
                    </div>
                    <div className="candidate-education-content mt-4 d-flex">
                      <div className="circle flex-shrink-0 bg-soft-primary"><span></span></div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">Design Communication Visual</h6>
                        <p className="text-muted mb-2">International University - (2012-2015)</p>
                        <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-education-details mt-4 pt-3">
                    <h6 className="fs-17 fw-bold mb-0">Experience</h6>
                    <div className="candidate-education-content mt-4 d-flex">
                      <div className="circle flex-shrink-0 bg-soft-primary"><span></span></div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">Web Design & Development Team Leader</h6>
                        <p className="mb-2 text-muted">Creative Agency - (2013 - 2016)</p>
                        <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                      </div>
                    </div>
                    <div className="candidate-education-content mt-4 d-flex">
                      <div className="circle flex-shrink-0 bg-soft-primary"><span></span></div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">Project Manager</h6>
                        <p className="mb-2 text-muted">Jobcy Technology Pvt.Ltd - (Pressent)</p>
                        <p className="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CandidateDetails