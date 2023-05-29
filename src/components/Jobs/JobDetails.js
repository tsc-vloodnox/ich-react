import React from 'react'

const JobDetails = () => {
    return (
        <div className='page-wrapper'>
            <div className="page-title">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-text">
                                <h2 >Job Details</h2>
                                <ul >
                                    <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                                    <li ><i className="icofont-simple-right"></i>
                                    </li>
                                    <li >Job Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="job-details pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="job-details-item">
                                <div className="job-description">
                                    <h2>Job Description</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Reprehenderit magnam sapiente dolor quos expedita quis, ad perspiciatis hic
                                        nihil laboriosam at eius.</p>
                                </div>
                                <div className="job-knowledge">
                                    <h2>Required Knowledge, Skills, and Abilities</h2>
                                    <ul>
                                        <li><i className="icofont-hand-drawn-right"></i> Hand On experience with Wordpress
                                        </li>
                                        <li><i className="icofont-hand-drawn-right"></i> Better knowledge of front-end
                                            technologies, including HTML5, CSS3, JavaScript, jQuery</li>
                                        <li><i className="icofont-hand-drawn-right"></i> Belief – believing in yourself and
                                            those around you</li>
                                        <li><i className="icofont-hand-drawn-right"></i> Experience designing and
                                            developing responsive design websites</li>
                                        <li><i className="icofont-hand-drawn-right"></i> Ability to convert comprehensive
                                            layout and wireframes into working HTML pages</li>
                                        <li><i className="icofont-hand-drawn-right"></i> Strong understanding of PHP
                                            back-end development</li>
                                    </ul>
                                </div>
                                <div className="job-knowledge">
                                    <h2>Education Qualification</h2>
                                    <ul>
                                        <li><i className="icofont-hand-drawn-right"></i> Any Graduattion Degree(13th Pass)
                                            (Preferred)</li>
                                        <li><i className="icofont-hand-drawn-right"></i> Advanced degree or equivalent
                                            experience in graphic and web design</li>
                                        <li><i className="icofont-hand-drawn-right"></i> 2 or more years of professional
                                            design experience</li>
                                        <li><i className="icofont-hand-drawn-right"></i> Direct response email experience
                                        </li>
                                        <li><i className="icofont-hand-drawn-right"></i> Ecommerce website design
                                            experience</li>
                                    </ul>
                                </div>
                                <div className="text-center"><a routerlink="/create-account" className="job-details-btn" ng-reflect-router-link="/create-account" href="/create-account">Apply Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="job-details-item">
                                <div className="job-overview">
                                    <h3>Overview</h3>
                                    <ul>
                                        <li><i className="icofont-dollar"></i>
                                            <p>Offered Salary</p><span>$10k-$150k</span>
                                        </li>
                                        <li><i className="icofont-users-alt-3"></i>
                                            <p>Gender</p><span>Male</span>
                                        </li>
                                        <li><i className="icofont-badge"></i>
                                            <p>Experince</p><span>2
                                                Years</span>
                                        </li>
                                        <li><i className="icofont-graduate"></i>
                                            <p>Qualification</p><span>Master
                                                Degree</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="job-overview job-company">
                                    <h3>Company Address</h3>
                                    <ul>
                                        <li><i className="icofont-location-pin"></i><span>4th Floor,
                                            408 No Chamber</span></li>
                                        <li><i className="icofont-ui-call"></i><a href="tel:+07554332322">Call : +07 554 332 322</a></li>
                                        <li><i className="icofont-ui-email"></i><a href="mailto:hello@peof.com">hello@peof.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails