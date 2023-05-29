import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebaseConfig";
import {
  getDoc,
  arrayRemove,
  doc,
  updateDoc
} from "firebase/firestore";
import EditCandidate from "./EditCandidate";
import CreateCandidate from "./CreateCandidate";
import Educations from "./Educations";
import Experiences from "./Experiences";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const CandidateOverview = () => {
  const { currentUser } = useAuth();
  const [hasCandidatProfile, setHasCandidatProfile] = useState(false);
  const [candidateData, setCandidateData] = useState([]);
  const candidateRef = doc(db, "Candidats", currentUser?.uid);

  useEffect(() => {
    async function fetchCandidatProfile() {
      const candidatDocRef = doc(db, "Candidats", currentUser?.uid);
      const candidatDoc = await getDoc(candidatDocRef);
      setHasCandidatProfile(candidatDoc.exists());
    }

    if (currentUser?.uid) {
      fetchCandidatProfile();
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser?.uid) {
        const candidateDoc = await db.collection("Candidats").doc(currentUser.uid).get();
        if (candidateDoc.exists) {
          setCandidateData(candidateDoc.data());
        }
      }
    };

    fetchData();
  }, [currentUser]);

  const handleDeleteEdu = (education) => {
    updateDoc(candidateRef, {
      educations: arrayRemove(education),
    })
      .then(() => {
        toast("Education deleted successfully", { type: "success" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteExp = (experience) => {
    updateDoc(candidateRef, {
      experiences: arrayRemove(experience),
    })
      .then(() => {
        toast("Experience deleted successfully", { type: "success" });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const [edit, setEdit] = useState(false);
  const [addEducation, setAddEducation] = useState(false)
  const [addExperience, setAddExperience] = useState(false)

  return (
    <>
      {hasCandidatProfile ? (
        <section className="mt-5">
          {candidateData && (
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card profile-sidebar me-lg-4">
                    <div className="card-body p-4">
                      <div className="text-center pb-4 border-bottom">
                        <img
                          src={candidateData.candidatePic}
                          alt="CandidatePic"
                          className="avatar-lg img-thumbnail rounded-circle mb-4"
                        />

                        <h5 className="mb-0">{candidateData.name}</h5>
                        <p className="text-muted">{candidateData.currentOccupation}</p>
                        <p className="text-muted" >{candidateData.likes} likes</p>
                        <ul className="candidate-detail-social-menu list-inline mb-0">
                          <li className="list-inline-item">
                            <a href={candidateData.socialLinks.facebook} className="social-link rounded-3 btn-soft-primary">
                              <i className="uil uil-facebook-f"></i>
                            </a>

                          </li>
                          <li className="list-inline-item">
                            <a href={candidateData.socialLinks.twitter} className="social-link rounded-3 btn-soft-primary">
                              <i className="uil uil-twitter-f"></i>
                            </a>

                          </li>
                          <li className="list-inline-item">
                            <a href={candidateData.socialLinks.linkedin} className="social-link rounded-3 btn-soft-primary">
                              <i className="uil uil-linkedin-f"></i>
                            </a>

                          </li>
                          <li className="list-inline-item">
                            <a href={candidateData.socialLinks.whattsapp} className="social-link rounded-3 btn-soft-primary">
                              <i className="uil uil-whattsapp-f"></i>
                            </a>

                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 border-bottom pb-4">
                        <h5 className="fs-17 fw-bold mb-3">Documents</h5>
                        <div className="profile-document mb-0">
                          <div className="profile-document-list d-flex align-items-center mt-4 ">
                            <div className="ms-3">
                              <h6 className="fs-16 mb-0">Telecharger le CV</h6>
                            </div>
                            <div className="ms-auto">
                              <Link
                                className="cv-download"
                                to={candidateData.candidateCV}
                                target="_blank"
                                download
                              >
                                <svg
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="DownloadOutlinedIcon"
                                >
                                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
                        <div className="profile-contact">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <div className="d-flex">
                                <label>Email</label>
                                <div>
                                  <p className="text-muted text-break mb-0">
                                    {candidateData.email}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <label>Phone Number</label>
                                <div>
                                  <p className="text-muted mb-0">{candidateData.number}</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <label>Adresse</label>
                                <div>
                                  <p className="text-muted mb-0">{candidateData.address}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="col-lg-8">
                  <div className="card profile-content-page mt-4 mt-lg-0">
                    <div className="card-body p-4">
                      <div>
                        <div className="text-center">
                          <button className='btn border' onClick={() => setEdit(!edit)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                              <line x1="16" y1="5" x2="19" y2="8" />
                            </svg>
                          </button>
                        </div>
                        {edit ? (
                          <EditCandidate />
                        ) : (
                          <div>
                            <div>
                              <h5 className="fs-18 fw-bold">About</h5>
                              <p className="text-muted mt-4">
                                {candidateData.description}
                              </p>
                            </div>
                            <div>
                              <div className="candidate-education-details mt-4">
                                <h6 className="fs-18 fw-bold mb-0">Educations</h6>
                                {candidateData.educations.map(({ eduId, diploma, institut, years, details }) => (
                                  <div className="candidate-education-content mt-4 d-flex" key={eduId}>
                                    <div className="circle flex-shrink-0 bg-soft-primary">
                                      <span></span>
                                    </div>
                                    <div className="ms-4">
                                      <h6 className="fs-16 mb-1">
                                        {diploma}
                                      </h6>
                                      <p className="mb-2 text-muted">
                                        {institut} - "{years}"
                                      </p>
                                      <p className="text-muted">
                                        {details}
                                      </p>
                                    </div>

                                    <div
                                      className="btn"
                                      onClick={() =>
                                        handleDeleteEdu({
                                          eduId,
                                          diploma,
                                          institut,
                                          years,
                                          details,
                                        })
                                      }
                                    >
                                      <img src="./img/icons/trash.svg" alt="trash" />
                                    </div>
                                  </div>)
                                )}

                                <button className="btn border" onClick={() => setAddEducation(!addEducation)}>Add+</button>
                                {addEducation && <Educations id={candidateData.userID} />}
                              </div>

                              <div className="candidate-education-details mt-4">
                                <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
                                {candidateData.experiences.map(({ expId, jobName, companyName, years, details }) => (
                                  <div className="candidate-education-content mt-4 d-flex" key={expId}>
                                    <div className="circle flex-shrink-0 bg-soft-primary">
                                      <span></span>
                                    </div>
                                    <div className="ms-4">
                                      <h6 className="fs-16 mb-1">
                                        {jobName}
                                      </h6>
                                      <p className="mb-2 text-muted">
                                        {companyName} - "{years}"
                                      </p>
                                      <p className="text-muted">
                                        {details}
                                      </p>
                                    </div>

                                    <div
                                      className="btn"
                                      onClick={() =>
                                        handleDeleteExp({
                                          expId,
                                          jobName,
                                          companyName,
                                          years,
                                          details,
                                        })
                                      }
                                    >
                                      <img src="./img/icons/trash.svg" alt="trash" />
                                    </div>
                                  </div>)
                                )}

                                <button className="btn border" onClick={() => setAddExperience(!addExperience)}>Add+</button>
                                {addExperience && <Experiences id={candidateData.userID} />}
                              </div>
                            </div>
                            <div className="mt-4">
                              <h5 className="fs-18 fw-bold">Skills</h5>
                              <span className="badge fs-13 bg-soft-success mt-2">{candidateData.skills}</span>
                            </div>
                            <div className="mt-4">
                              <h5 className="fs-18 fw-bold">Langues parlées</h5>
                              <span className="badge fs-13 bg-soft-success mt-2">{candidateData.languages}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div >
          )}
        </section >
      ) : (
        <CreateCandidate />
      )}

    </>
  )
}

export default CandidateOverview;