import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import DeleteJob from "./DeleteJob";
import LikeButton from "./LikeButton";

const JobCard = ({ job }) => {

    const { currentUser } = useAuth();

    return (
        <div className='col-lg-6'>
            <div class="job-box card mt-4">
                <div class="p-4">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <div class="text-center mb-4 mb-md-0">
                                <a href="company-details.html">
                                    <img src={job.jobPic} alt="Job-pic" class="img-fluid rounded-3" />
                                </a>
                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="mb-2 mb-md-0">
                                <h5 class="fs-18 mb-1">
                                    <a href="jobs/job-details" class="text-dark">
                                        {job.jobName}
                                    </a>
                                </h5>
                                <p class="text-muted fs-14 mb-0">{job.company}</p>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="d-flex mb-2">
                                <div class="flex-shrink-0">
                                    <i class="mdi mdi-map-marker text-primary me-1"></i>
                                </div>
                                <p class="text-muted mb-0">{job.location}</p>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <p class="text-muted mb-2">
                                    <span class="text-primary">$</span>
                                    {job.salary}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-around">
                        <span class="badge bg-soft-info fs-13 mt-1">{job.jobType}</span>
                        <span class="badge bg-soft-info fs-13 mt-1">{job.tags}</span>

                    </div>

                </div>
                <div class="p-3 bg-light">
                    <div class="row">

                        <div class="col-lg-8 col-md-5">
                            <div>
                                <p class="text-muted mb-0">
                                    <span class="text-dark">Notes :</span>
                                    {job.description}
                                </p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div>
                                <p class="text-muted mb-0">
                                    <span class="text-dark">Experience :</span>
                                    {job.experiance}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer bg-light">
                    {job.userId === currentUser?.uid && (
                        <DeleteJob id={job.id} jobPic={job.jobPic} />
                    )}
                    {
                        currentUser ? (
                            <>
                                <LikeButton id={job.id} likes={job.likes} />
                                <a href="#applyNow" class="btn border primary-link">
                                    Postuler
                                    <i class="mdi mdi-chevron-double-right"></i>
                                </a>
                            </>
                        ) : (
                            <a href="/login" className="btn border">Se connecter pour postuler</a>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default JobCard