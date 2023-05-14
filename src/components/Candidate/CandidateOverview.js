import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import EditCandidate from "./EditCandidate";
import CreateCandidate from "./CreateCandidate";

const CandidateOverview = () => {
  const { currentUser } = useAuth();
  const [hasCandidatProfile, setHasCandidatProfile] = useState(false);

  useEffect(() => {
    async function fetchCandidatProfile() {
      const candidatDocRef = doc(db, "Candidats", currentUser.uid);
      const candidatDoc = await getDoc(candidatDocRef);
      setHasCandidatProfile(candidatDoc.exists());
    }

    fetchCandidatProfile();
  }, [currentUser.uid]);

  const [edit, setEdit] = useState(false);
  const [candidateData, setCandidateData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const candidateDoc = await db.collection("Candidats").doc(currentUser.uid).get();
      if (candidateDoc.exists) {
        setCandidateData(candidateDoc.data());
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <>
      {hasCandidatProfile ? (
        <section class="mt-5">
          {candidateData && (
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="card profile-sidebar me-lg-4">
                    <div class="card-body p-4">
                      <div class="text-center pb-4 border-bottom">
                        {candidateData.candidatePic ? (<img
                          src={candidateData.candidatePic}
                          alt="CandidatePic"
                          class="avatar-lg img-thumbnail rounded-circle mb-4"
                        />) : (
                          <img
                            src={currentUser.photoURL}
                            alt="CandidatePic"
                            class="avatar-lg img-thumbnail rounded-circle mb-4"
                          />
                        )}


                        <h5 class="mb-0">{candidateData.name}</h5>
                        <p class="text-muted">{candidateData.currentOccupation}</p>
                        <p class="text-muted" >{candidateData.likes} likes</p>
                        <ul class="candidate-detail-social-menu list-inline mb-0">
                          <li class="list-inline-item">
                            <a href="#" class="social-link rounded-3 btn-soft-primary">
                              <i class="uil uil-facebook-f"></i>
                            </a>
                            {candidateData.socialLinks}
                          </li>
                        </ul>
                      </div>

                      <div class="mt-4 border-bottom pb-4">
                        <h5 class="fs-17 fw-bold mb-3">Documents</h5>
                        <div class="profile-document mb-0">
                          <div>
                            <div class="profile-document-list d-flex align-items-center mt-4 ">
                              <div class="icon flex-shrink-0">
                                <i class="uil uil-file"></i>
                              </div>
                              <div class="ms-3">
                                <h6 class="fs-16 mb-0">{candidateData.cv}</h6>
                                {/* <p class="text-muted mb-0">{candidateData.cv.size}</p> */}
                              </div>
                              <div class="ms-auto">
                                <a href="#" download class="fs-20 text-muted"><i class="uil uil-import"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-4">
                        <h5 class="fs-17 fw-bold mb-3">Contacts</h5>
                        <div class="profile-contact">
                          <ul class="list-unstyled mb-0">
                            <li>
                              <div class="d-flex">
                                <label>Email</label>
                                <div>
                                  <p class="text-muted text-break mb-0">
                                    {candidateData.email}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label>Phone Number</label>
                                <div>
                                  <p class="text-muted mb-0">{candidateData.number}</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label>Adresse</label>
                                <div>
                                  <p class="text-muted mb-0">{candidateData.address}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div class="col-lg-8">
                  <div class="card profile-content-page mt-4 mt-lg-0">
                    <div class="card-body p-4">
                      <div>
                        <div className="text-center">
                          <button className='btn border' onClick={() => setEdit(!edit)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                              <h5 class="fs-18 fw-bold">About</h5>
                              <p class="text-muted mt-4">
                                {candidateData.description}
                              </p>
                            </div>
                            <div class="candidate-education-details mt-4">
                              <h6 class="fs-18 fw-bold mb-0">Education</h6>
                              <div class="candidate-education-content mt-4 d-flex">
                                <div class="circle flex-shrink-0 bg-soft-primary">
                                  {/* l'index de la liste */}
                                </div>
                                {/* <div class="ms-4">
                                  <h6 class="fs-16 mb-1">
                                    {candidateData.educations.diplome}
                                  </h6>
                                  <p class="mb-2 text-muted">
                                    {candidateData.educations.institut} - {candidateData.educations.year}
                                  </p>
                                  <p class="text-muted">
                                    {candidateData.educations.details}
                                  </p>
                                </div> */}
                              </div>
                            </div>
                            <div class="candidate-education-details mt-4">
                              <h6 class="fs-18 fw-bold mb-0">Experiences</h6>
                              <div class="candidate-education-content mt-4 d-flex">
                                <div class="circle flex-shrink-0 bg-soft-primary">
                                  {/* l'index de la liste */}
                                </div>
                                {/* <div class="ms-4">
                                  <h6 class="fs-16 mb-1">{candidateData.experiance.title}</h6>
                                  <p class="mb-2 text-muted">{candidateData.experiance.subTitle} - {candidateData.experiance.year}</p>
                                  <p class="text-muted">{candidateData.experiance.details}</p>
                                </div> */}
                              </div>
                            </div>
                            <div class="mt-4">
                              <h5 class="fs-18 fw-bold">Skills</h5>
                              <span class="badge fs-13 bg-soft-blue mt-2">{candidateData.skill}</span>
                            </div>
                            <div class="mt-4">
                              <h5 class="fs-18 fw-bold">Langues parlées</h5>
                              <span class="badge fs-13 bg-soft-success mt-2">{candidateData.languages}</span>
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