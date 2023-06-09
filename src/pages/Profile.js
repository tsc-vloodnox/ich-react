import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import CandidateOverview from "../components/Candidate/CandidateOverview";
import UpdateProfile from "../components/authentication/UpdateProfile";
import { db } from "../firebaseConfig";
const Profile = () => {
    const navigate = useNavigate();

    const { currentUser, logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
            navigate("/login");
        } catch {
            console.log("Failed to log out");
        }
        window.location.reload();
    }

    const [profilModal, setprofilModal] = useState(false);
    const [candidateModal, setCandidateModal] = useState(false);
    const [settingsModal, setSettingsModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "my-profil") {
            setprofilModal(true);
            setCandidateModal(false);
            setSettingsModal(false);
        } else if (e.target.id === "candidate-profil") {
            setprofilModal(false);
            setCandidateModal(true);
            setSettingsModal(false);
        } else if (e.target.id === "settings") {
            setprofilModal(false);
            setCandidateModal(false);
            setSettingsModal(true);
        }
    };

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userDoc = await db.collection("Users").doc(currentUser.uid).get();
            if (userDoc.exists) {
                setUserData(userDoc.data());
            }
        };

        fetchData();
    }, [currentUser]);

    if (!userData) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className='page-wrapper profile'>
            <div className="page-title">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-text">
                                <h2 >Mon profile</h2>
                                <ul >
                                    <li >
                                        <a href="/">Home</a>
                                    </li>
                                    <li >
                                        <i className="icofont-simple-right"></i>
                                    </li>
                                    <li >Mon profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="dashboard-nav">
                                <ul id="pills-tab" role="tablist" className="nav nav-pills mb-3">
                                    <li className="nav-item">
                                        <button
                                            id="my-profil"
                                            onClick={handleModals}
                                            className={profilModal ? "nav-link active" : "nav-link"}
                                        >
                                            Mon Profile
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            id="candidate-profil"
                                            onClick={handleModals}
                                            className={candidateModal ? "nav-link active" : "nav-link"}
                                        >
                                            Profile candidat
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            id="settings"
                                            onClick={handleModals}
                                            className={settingsModal ? "nav-link active" : "nav-link"}
                                        >
                                            Mise a jour
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        {profilModal &&
                            <>
                                {userData && (
                                    <>
                                        <div className="col-lg-4 left-part">
                                            <img src={userData.photoURL} alt="Avatar" className="avatar" width={80} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h4>Nom: {userData.fullName}</h4>
                                            <h4>Email: {userData.email}</h4>
                                            <h4>Role: {userData.role}</h4>
                                        </div>
                                    </>
                                )}
                            </>
                        }
                    </div>

                    {candidateModal && <CandidateOverview />}
                    {settingsModal && <UpdateProfile />}
                </div>
            </div>
        </div>
    )
}

export default Profile