import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import JobCard from "./JobCard";

const JobsList = () => {
    const { currentUser } = useAuth();

    const [jobs, setJobs] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        const categoryRef = collection(db, "Category");
        const q = query(categoryRef);
        onSnapshot(q, (snapshot) => {
            const categorys = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategorys(categorys);
        });
    }, []);

    useEffect(() => {
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

    // filtreur principal
    const [jobName, setJobName] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const filteredJobsArray = jobs.filter((job) => {
            const jobNameMatch = job.jobName.toLowerCase().includes(jobName.toLowerCase());
            const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
            const jobTypeMatch = job.jobType === jobType;
            const categoryIdMatch = job.categoryId === categoryId;

            return jobNameMatch && locationMatch && jobTypeMatch && categoryIdMatch;
        });

        setFilteredJobs(filteredJobsArray);

        setJobName("");
        setLocation("");
        setJobType("");
        setCategoryId("");
    };

    // filtreur secondaire
    const [selectedOrder, setSelectedOrder] = useState("");
    const handleOrderChange = (event) => {
        setSelectedOrder(event.target.value);
    };
    let orderedJobs = [...jobs];
    function shuffleArray(array) {
        const shuffledArray = [...array];
        let currentIndex = shuffledArray.length;

        while (currentIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
                shuffledArray[randomIndex],
                shuffledArray[currentIndex],
            ];
        }

        return shuffledArray;
    }

    if (selectedOrder === "new") {
        orderedJobs.sort((a, b) => b.createdAt - a.createdAt);
    } else if (selectedOrder === "old") {
        orderedJobs.sort((a, b) => a.createdAt - b.createdAt);
    } else if (selectedOrder === "fav") {
        orderedJobs.sort((a, b) => b.likes - a.likes);
    } else if (selectedOrder === "rdm") {
        orderedJobs = shuffleArray(jobs);
    }


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
                    <div class="row justify-content-center">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit}>
                                <div class="row g-2">
                                    <div class="col-lg-3 col-md-6">
                                        <div class="filler-job-form">
                                            <i class="uil uil-briefcase-alt"></i>
                                            <input
                                                type="search"
                                                className="form-control filter-job-input-box"
                                                placeholder="Job name "
                                                name="jobName"
                                                value={jobName}
                                                onChange={(event) => setJobName(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <div class="filler-job-form">
                                            <i class="uil uil-briefcase-alt"></i>
                                            <select
                                                class="form-select 
                                            form-control"
                                                value={location}
                                                onChange={(event) => setLocation(event.target.value)}
                                            >
                                                <option value="">Location</option>
                                                <option value="USA">États-Unis</option>
                                                <option value="CAN">Canada</option>
                                                <option value="UK">Royaume-Uni</option>
                                                <option value="GER">Allemagne</option>
                                                <option value="FRA">France</option>
                                                <option value="AUS">Australie</option>
                                                <option value="RUS">Russie</option>
                                                <option value="MAR">Maroc</option>
                                                <option value="SUI">Suisse</option>
                                                <option value="NED">Pays-Bas</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6">
                                        <div class="filler-job-form">
                                            <i class="uil uil-clipboard-notes"></i>
                                            <select
                                                className="form-select"
                                                name="jobType"
                                                value={jobType}
                                                onChange={(event) => setJobType(event.target.value)}
                                            >
                                                <option value="">Type</option>
                                                <option value="Temps plein">Temps plein</option>
                                                <option value="Temps partiel">Temps partiel</option>
                                                <option value="Stagiaire">Stagiaire</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6">
                                        <div class="filler-job-form">
                                            <i class="uil uil-briefcase-alt"></i>
                                            <select
                                                className="form-select"
                                                name="jobCategory"
                                                value={categoryId}
                                                onChange={(event) => setCategoryId(event.target.value)}
                                            >
                                                <option value="">Catégorie</option>
                                                {categorys.map((category) => (
                                                    <option key={category.id} >
                                                        {category.description}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6">
                                        <button class="btn btn-primary w-100" type="submit">
                                            <i class="uil uil-filter"></i> Filtrer
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div class="mt-3">
                        <div class="select-by-order">
                            <select class="form-select" value={selectedOrder} onChange={handleOrderChange}>
                                <option value="">Ordre</option>
                                <option value="new">Newest</option>
                                <option value="old">Oldest</option>
                                <option value="fav">Favorite</option>
                                <option value="rdm">Random</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        {filteredJobs.length > 0 ?
                            filteredJobs.map((job) => (
                                <JobCard job={job} key={job.id} user={currentUser} />
                            )) : (
                                orderedJobs.map((job) => (
                                    <JobCard job={job} key={job.id} user={currentUser} />
                                ))
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobsList