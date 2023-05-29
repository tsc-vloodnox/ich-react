import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import DeleteJob from "./DeleteJob";
import LikeButton from "./LikeButton";

const JobCard = ({ job, openModal }) => {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }
    const { currentUser } = useAuth();

    return (
        <div className='col-lg-6'>
            <div className="job-box card mt-4">
                <div className="p-4">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                                <a href="company-details.html">
                                    <img src={job.jobPic} alt="Job-pic" className="img-fluid rounded-3" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="mt-3 mt-lg-0">
                                <h5 className="fs-17 mb-1">
                                    <a href="jobs/job-details" className="text-dark">
                                        {job.jobName}
                                    </a>
                                    {" "}
                                    <small className="text-muted fw-normal">
                                        {job.experience} Exp.
                                    </small>
                                </h5>
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <p class="text-muted fs-14 mb-0">{job.company} {","}</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> {job.location} {","}</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> {job.salary}</p>
                                    </li>
                                </ul>
                                <div className="mt-2">
                                    <span className="badge bg-soft-success mt-1 mx-1">{job.categorys}</span>
                                    <span className="badge bg-soft-info fs-13 mt-1 mx-1">{job.jobType}</span>
                                    {job.tags.map((tag, index) => (
                                        <span className="badge bg-soft-primary fs-13 mt-1 mx-1" key={index}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="favorite-icon">
                        {currentUser && <LikeButton id={job.id} likes={job.likes} />}
                    </div>
                </div>
                <div className="p-3 bg-light">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="text-muted text-dark mb-0 ltext">
                                Notes : {job.description}
                            </p>
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
                                <button className="btn border primary-link" onClick={openModal}>
                                    Postuler
                                    <i className="mdi mdi-chevron-double-right"></i>
                                </button>
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