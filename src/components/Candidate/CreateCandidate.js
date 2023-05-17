import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { Timestamp, addDoc, doc, setDoc } from "firebase/firestore";

const CreateCandidate = () => {
  const { currentUser } = useAuth();

  const [candidateData, setCandidateData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    number: "",
    languages: "",
    address: "",
    currentOccupation: "",
    description: "",
    educations: [],
    experiences: [],
    skills: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    whatsapp: "",
    cv: "",
    candidatePic: "",
    createdAt: Timestamp.now().toDate(),
    createdBy: "",
    likes: [],
  });

  const [gender, setGender] = useState("");
  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  const handleChange = (e) => {
    setCandidateData({ ...candidateData, [e.target.name]: e.target.value });
  };

  function handleCreateCandidateProfile(e) {
    e.preventDefault();

    createCandidateProfile(candidateData, currentUser.uid)
      .then(() => {
        toast("Profil de candidat créé avec succès");
        window.location.reload();
      })
      .catch((error) => {
        toast("Erreur lors de la création du profil de candidat", error);
      });
  }

  function createCandidateProfile(candidateData, userId) {
    const candidateRef = doc(db, "Candidats", userId);

    return setDoc(candidateRef, {
      userID: userId,
      name: candidateData.name,
      age: candidateData.age,
      gender: gender,
      email: candidateData.email,
      number: candidateData.number,
      languages: candidateData.languages,
      address: candidateData.address,
      currentOccupation: candidateData.currentOccupation,
      description: candidateData.description,
      educations: [],
      experiences: [],
      skills: candidateData.skills,
      facebook: candidateData.facebook,
      twitter: candidateData.twitter,
      linkedin: candidateData.linkedin,
      whatsapp: candidateData.whatsapp,
      cv: null,
      candidatePic: null,
      createdAt: Timestamp.now().toDate(),
      createdBy: currentUser.displayName,
      likes: [],
    });
  }

  return (
    <form onSubmit={handleCreateCandidateProfile}>
      <div>
        <h5 class="fs-17 fw-semibold mb-3 mb-0">Infos de base</h5>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Nom et prenom</label>
              <input
                type="text"
                class="form-control"
                name='name'
                value={candidateData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Profession actuel</label>
              <input
                type="text"
                class="form-control"
                name='currentOccupation'
                value={candidateData.currentOccupation}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Age</label>
              <input
                type="date"
                class="form-control"
                name='age'
                value={candidateData.age}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label className='form-label'>Gender</label>
              <select className="form-select" value={gender} onChange={handleGenderChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                class="form-control"
                type="text"
                name='email'
                value={candidateData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Numero</label>
              <input
                class="form-control"
                type="text"
                name='number'
                value={candidateData.number}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Langages</label>
              <input
                class="form-control"
                type="text"
                name='languages'
                value={candidateData.languages}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Adresse</label>
              <input
                class="form-control"
                type="text"
                name='address'
                value={candidateData.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Présentez-vous</label>
              <textarea
                class="form-control"
                rows="5"
                name='description'
                value={candidateData.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>

      </div>

      <div class="mt-4">
        <h5 class="fs-17 fw-semibold mb-3">Compétences </h5>
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-3">
              <label for="facebook" class="form-label">Titre</label>
              <input
                class="form-control"
                type="text"
                name='competences'
                value={candidateData.competences}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

        </div>

      </div>

      <div class="mt-4">
        <h5 class="fs-17 fw-semibold mb-3">Social Media</h5>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label for="facebook" class="form-label">Facebook</label>
              <input
                type="text"
                class="form-control"
                name='facebook'
                value={candidateData.facebook}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="twitter" class="form-label">Twitter</label>
              <input
                type="text"
                class="form-control"
                name='twitter'
                value={candidateData.twitter}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="linkedin" class="form-label">Linkedin</label>
              <input
                type="text"
                class="form-control"
                name='linkedin'
                value={candidateData.linkedin}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="whatsapp" class="form-label">Whatsapp</label>
              <input
                type="text"
                class="form-control"
                name='whatsapp'
                value={candidateData.whatsapp}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

        </div>

      </div>

      <div class="mt-4 text-end">
        <button type='submit' class="btn btn-primary">Envoyer</button>
      </div>
    </form>
  )
}

export default CreateCandidate