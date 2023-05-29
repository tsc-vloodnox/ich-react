import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import JobCard from "./JobCard";

const JobsList = () => {
    const { currentUser } = useAuth();
    const [open, setOpen] = useState(false);

    function closeModal() {
        setOpen(false);
    }

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
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const filteredJobsArray = jobs.filter((job) => {
            const jobNameMatch = job.jobName.toLowerCase().includes(jobName.toLowerCase());
            const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
            const jobTypeMatch = job.jobType === jobType;
            const categoryNameMatch = job.categoryName === categoryName;

            return jobNameMatch && locationMatch && jobTypeMatch && categoryNameMatch;
        });

        setFilteredJobs(filteredJobsArray);

        setJobName("");
        setLocation("");
        setJobType("");
        setCategoryName("");
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
            <div className="page-title">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-text">
                                <h2 >Job List</h2>
                                <ul >
                                    <li ><a href="/">Home</a></li>
                                    <li ><i className="icofont-simple-right"></i></li>
                                    <li ><a href="/jobs">Job Categories</a></li>
                                    <li ><i className="icofont-simple-right"></i></li>
                                    <li >Job List</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-2">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="filler-job-form">
                                            <i className="uil uil-briefcase-alt"></i>
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
                                    <div className="col-lg-3 col-md-6">
                                        <div className="filler-job-form">
                                            <i className="uil uil-briefcase-alt"></i>
                                            <select
                                                className="form-select 
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
                                    <div className="col-lg-2 col-md-6">
                                        <div className="filler-job-form">
                                            <i className="uil uil-clipboard-notes"></i>
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
                                    <div className="col-lg-2 col-md-6">
                                        <div className="filler-job-form">
                                            <i className="uil uil-briefcase-alt"></i>
                                            <select
                                                className="form-select"
                                                name="jobCategory"
                                                value={categoryName}
                                                onChange={(event) => setCategoryName(event.target.value)}
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
                                    <div className="col-lg-2 col-md-6">
                                        <button className="btn btn-primary w-100" type="submit">
                                            <i className="uil uil-filter"></i> Filtrer
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="select-by-order">
                            <select className="form-select" value={selectedOrder} onChange={handleOrderChange}>
                                <option value="">Ordre</option>
                                <option value="new">Newest</option>
                                <option value="old">Oldest</option>
                                <option value="fav">Favorite</option>
                                <option value="rdm">Random</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        {filteredJobs.length > 0 ?
                            filteredJobs.map((job) => (
                                <JobCard job={job} key={job.id} catId={job.categoryID} user={currentUser} />
                            )) : (
                                orderedJobs.map((job) => (
                                    <JobCard job={job} key={job.id} openModal={open} user={currentUser} />
                                ))
                            )
                        }
                    </div>
                </div>
            </section>
            <div className={open ? "modal show" : "modal"}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-5">
                            <div className="text-center mb-4">
                                <h5 className="modal-title">Apply For This Job</h5>
                            </div>
                            <div className="position-absolute end-0 top-0 p-3">
                                <button
                                    type="button"
                                    className="close"
                                    onClick={closeModal}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label for="messageControlTextarea" className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="Enter your message" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label" >Resume Upload</label>
                                <input type="file" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Application</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsList