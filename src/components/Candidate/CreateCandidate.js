import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db, storage } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { Timestamp, setDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const CreateCandidate = () => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState(0);
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
    exp: "",
    offredSalary: "",
    skills: "",
    socialLinks: [],
    candidateCV: "",
    candidatePic: "",
    createdAt: Timestamp.now().toDate(),
    createdBy: "",
    likes: [],
  });

  const [gender, setGender] = useState("");
  const [tagsChaine, setTagsChaine] = useState("");
  const [tagsList, setTagsList] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
    whatsapp: ""
  });

  function handleGenderChange(e) {
    setGender(e.target.value);
  }
  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value
    }));
  };
  const handleTagsChaineChange = (e) => {
    setTagsChaine(e.target.value)
  }
  const separerChaines = () => {
    const mots = tagsChaine.split(",");
    setTagsList(mots);
  }
  useEffect(() => {
    separerChaines();
  }, [tagsChaine]);

  const handleChange = (e) => {
    setCandidateData({ ...candidateData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setCandidateData({ ...candidateData, candidatePic: e.target.files[0] });
  };
  const handleCvChange = (e) => {
    setCandidateData({ ...candidateData, candidateCV: e.target.files[0] });
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

  async function createCandidateProfile(candidateData, userId) {
    const candidateRef = doc(db, "Candidats", userId);
    const userRef = doc(db, "Users", userId);
    let candidatePicUrl = null;
    let candidateCvUrl = null;
    if (candidateData.candidatePic) {
      const storageRef = ref(storage, `/images/${Date.now()}${candidateData.candidatePic.name}`);
      const uploadImage = uploadBytesResumable(storageRef, candidateData.candidatePic);

      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progressPercent);
        },
        (err) => {
          console.log(err);
        }
      );

      await uploadImage;
      candidatePicUrl = await getDownloadURL(uploadImage.snapshot.ref);
    }
    if (candidateData.candidateCV) {
      const storageRef = ref(storage, `/documents/${Date.now()}${candidateData.candidateCV.name}`);
      const uploadDoc = uploadBytesResumable(storageRef, candidateData.candidateCV);

      uploadDoc.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progressPercent);
        },
        (error) => {
          console.log("Une erreur s'est produite lors de l'envoi du document", error);
        });

      await uploadDoc;
      candidateCvUrl = await getDownloadURL(uploadDoc.snapshot.ref);
    }

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
      exp: candidateData.exp,
      offredSalary: candidateData.offredSalary,
      skills: tagsChaine,
      socialLinks: socialLinks,
      cv: candidateCvUrl,
      candidatePic: candidatePicUrl,
      createdAt: Timestamp.now().toDate(),
      createdBy: currentUser.displayName,
      likes: [],
    }).then(() => {
      updateDoc(userRef, {
        role: "Candidate"
      })
    }).then(() => {
      console.log("profile utilisateur mise a jour")
    }).catch((error) => {
      console.error("une erreur s'est produite", error)
    })
  }

  return (
    <form onSubmit={handleCreateCandidateProfile}>
      <div>
        <h5 className="fs-17 fw-semibold mb-3 mb-0">Infos de base</h5>
        <div className="row">

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Nom et prenom</label>
              <input
                type="text"
                className="form-control"
                name='name'
                value={candidateData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Profession actuel</label>
              <input
                type="text"
                className="form-control"
                name='currentOccupation'
                value={candidateData.currentOccupation}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="date"
                className="form-control"
                name='age'
                value={candidateData.age}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className='form-label'>Gender</label>
              <select className="form-select" value={gender} onChange={handleGenderChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input
                className="form-control"
                type="text"
                name='email'
                value={candidateData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Numero</label>
              <input
                className="form-control"
                type="text"
                name='number'
                value={candidateData.number}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Langages</label>
              <input
                className="form-control"
                type="text"
                name='languages'
                value={candidateData.languages}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Adresse</label>
              <input
                className="form-control"
                type="text"
                name='address'
                value={candidateData.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Experience</label>
              <input
                className="form-control"
                type="text"
                name='exp'
                value={candidateData.exp}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">offredSalary</label>
              <input
                className="form-control"
                type="text"
                name='offredSalary'
                value={candidateData.offredSalary}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mb-3">
              <label className="form-label">Présentez-vous</label>
              <textarea
                className="form-control"
                rows="5"
                name='description'
                value={candidateData.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Pic</label>
              <input
                type="file"
                className="form-control"
                name='candidatePic'
                onChange={(e) => handleImageChange(e)}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">CV</label>
              <input
                type="file"
                className="form-control"
                name='candidateCV'
                accept='.pdf'
                onChange={(e) => handleCvChange(e)}
              />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-4">
        <h5 className="fs-17 fw-semibold mb-3">Compétences </h5>
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-3">
              <label for="facebook" className="form-label">Titre</label>
              <input
                className="form-control"
                type="text"
                name='skills'
                value={tagsChaine}
                onChange={handleTagsChaineChange}
              />
            </div>
          </div>

        </div>

      </div>

      <div className="mt-4 form-group">
        <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="facebook" className="form-label">Facebook</label>
              <input
                type="text"
                className="form-control"
                name='facebook'
                value={socialLinks.facebook}
                onChange={handleSocialChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="twitter" className="form-label">Twitter</label>
              <input
                type="text"
                className="form-control"
                name='twitter'
                value={socialLinks.twitter}
                onChange={handleSocialChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="linkedin" className="form-label">Linkedin</label>
              <input
                type="text"
                className="form-control"
                name='linkedin'
                value={socialLinks.linkedin}
                onChange={handleSocialChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="whatsapp" className="form-label">Whatsapp</label>
              <input
                type="text"
                className="form-control"
                name='whatsapp'
                value={socialLinks.whatsapp}
                onChange={handleSocialChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-end">
        <button type='submit' className="btn btn-primary">Envoyer</button>
      </div>
      {progress === 0 ? null : (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`uploading image ${progress}%`}
          </div>
        </div>
      )}
    </form>
  )
}

export default CreateCandidate