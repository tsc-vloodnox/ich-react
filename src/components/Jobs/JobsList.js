import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from '../../firebaseConfig';
import JobCard from "./JobCard";

const JobsList = () => {
    const { currentUser } = useAuth();

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        // Récupérer tous les jobs depuis Firestore et les stocker dans l'état local
        db.collection("Jobs")
            .get()
            .then((querySnapshot) => {
                const jobsArray = [];
                querySnapshot.forEach((doc) => {
                    jobsArray.push({ ...doc.data(), id: doc.id });
                });
                setJobs(jobsArray);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, []);

    const handleFilter = (event) => {
        event.preventDefault();

        const jobName = event.target.elements.jobName.value;
        const location = event.target.elements.location.value;
        const jobType = event.target.elements.jobType.value;

        // Filtrer les jobs en fonction des critères sélectionnés
        const filteredJobsArray = jobs.filter((job) => {
            return (
                job.jobName === jobName &&
                job.location === location &&
                job.type === jobType
            );
        });

        setFilteredJobs(filteredJobsArray);
    };

    return (
        <div className="page-wrapper">
            <div class="page-title">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-title-text">
                                <h2 >Job List</h2>
                                <ul >
                                    <li ><a href="/">Home</a></li>
                                    <li ><i class="icofont-simple-right"></i></li>
                                    <li ><a href="/jobs">Job Categories</a></li>
                                    <li ><i class="icofont-simple-right"></i></li>
                                    <li >Job List</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <form onSubmit={handleFilter}>
                        <div class="row g-2">
                            <div class="col-lg-3 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-briefcase-alt"></i>
                                    <input
                                        type="search"
                                        className="form-control filter-job-input-box"
                                        placeholder="Job name / Company name... "
                                        name="jobName"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-briefcase-alt"></i>
                                    <input
                                        type="search"
                                        className="form-control filter-job-input-box"
                                        placeholder="Location... "
                                        name="location"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-clipboard-notes"></i>
                                    <select className="form-select" name="jobType">
                                        <option value="">Tous</option>
                                        <option value="Nouveau">Nouveau</option>
                                        <option value="En vedette">En vedette</option>
                                        <option value="Temps plein">Temps plein</option>
                                        <option value="Temps partiel">Temps partiel</option>
                                        <option value="Stagiaire">Stagiaire</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <button class="btn btn-primary w-100" type="submit"><i class="uil uil-filter"></i> Filtrer</button>
                            </div>
                        </div>
                    </form>

                    <div class="row">
                        {filteredJobs.length > 0
                            ? filteredJobs.map((job) => (
                                <JobCard job={job} key={job.id} user={currentUser} />
                            ))
                            : jobs.map((job) => (
                                <JobCard job={job} key={job.id} user={currentUser} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobsList