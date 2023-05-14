import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, } from "../../firebaseConfig";
import { toast } from "react-toastify";


const NewJob = () => {
  const { currentUser } = useAuth();
  const [jobData, setJobData] = useState({
    title: "",
    category: "",
    company: "",
    salary: "",
    vacancies: "",
    location: "",
    type: "",
    description: "",
    tags: "",
    experience: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setJobData({ ...jobData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!jobData.title) {
      alert("Veuillez remplir le formulaire");
      return;
    }
    if (jobData.title && !jobData.image) {
      const jobRef = collection(db, "Jobs");
      addDoc(jobRef, {
        title: jobData.title,
        category: jobData.category,
        company: jobData.company,
        salary: jobData.salary,
        vacancies: jobData.vacancies,
        location: jobData.location,
        type: jobData.type,
        description: jobData.description,
        tags: jobData.tags,
        experience: jobData.experience,
        imageUrl: null,
        createdAt: Timestamp.now().toDate(),
        createdBy: currentUser.displayName,
        posterPic: currentUser.photoURL,
        userId: currentUser.uid,
        likes: [],
      })
        .then(() => {
          toast("Job added successfully", { type: "success" });
          setProgress(0);
          setJobData({
            title: "",
            category: "",
            company: "",
            salary: "",
            vacancies: "",
            location: "",
            type: "",
            description: "",
            tags: "",
            experience: "",
            image: "",
          });
        })
        .catch((err) => {
          toast("Error adding job", { type: "error" }, err);
        });
    }

    if (jobData.title && jobData.image) {
      const storageRef = ref(
        storage,
        `/images/${Date.now()}${jobData.image.name}`
      );
      const uploadImage = uploadBytesResumable(storageRef, jobData.image);
      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPercent);
        },
        (err) => {
          console.log(err);
        },
        () => {
          setJobData({
            title: "",
            category: "",
            company: "",
            salary: "",
            vacancies: "",
            location: "",
            type: "",
            description: "",
            tags: "",
            experience: "",
            image: "",
          });

          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            const jobRef = collection(db, "Jobs");
            addDoc(jobRef, {
              title: jobData.title,
              category: jobData.category,
              company: jobData.company,
              salary: jobData.salary,
              vacancies: jobData.vacancies,
              location: jobData.location,
              type: jobData.type,
              description: jobData.description,
              tags: jobData.tags,
              experience: jobData.experience,
              imageUrl: url,
              createdAt: Timestamp.now().toDate(),
              createdBy: currentUser.displayName,
              posterPic: currentUser.photoURL,
              userId: currentUser.uid,
              likes: [],
            })
              .then(() => {
                toast("Job added successfully", { type: "success" });
                setProgress(0);
              })
              .catch((err) => {
                toast("Error adding job", { type: "error" }, err);
              });
          });
        }
      );
    }
  };

  return (
    <div className='page-wrapper'>
      <div class="page-title-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-title-text">
                <h2 >Post A Job</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i class="icofont-simple-right"></i></li>
                  <li >Post A Job</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="post-job-area pt-100">
        <div class="container">
          <div class="post-job-item">
            <div className="form">
              <div class="post-job-heading">
                <h2 >Publier votre emploi</h2>
              </div>
              <div class="row">
                <div class="col-lg-8">
                  <div class="form-group">
                    <label >image</label>
                    <input
                      type="file"
                      class="form-control"
                      name="image"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Titre du poste</label>
                    <input
                      type="text"
                      placeholder="UX/UI Designer"
                      class="form-control"
                      value={jobData.title}
                      name="title"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Catégorie d'emploi</label>
                    <div class="job-category-area">
                      <input
                        className='form-control'
                        type="text"
                        name="category"
                        placeholder="Sante, immobilier...."
                        value={jobData.category}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Nom de l'entreprise</label>
                    <input
                      type="text"
                      placeholder="Winbrans.com"
                      class="form-control"
                      name="company"
                      value={jobData.company}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <div class="job-currency-area">
                      <label >Salaire</label>
                      <input
                        type="text"
                        placeholder="$1500-2400/m"
                        class="form-control"
                        value={jobData.salary}
                        name="salary"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Postes vacants</label>
                    <input
                      type="text"
                      placeholder="10"
                      class="form-control"
                      name="vacancy"
                      value={jobData.vacancy}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Lieu d'implantation</label>
                    <input
                      type="text"
                      placeholder="210-27 Quadra, Market Street, Victoria Canada"
                      class="form-control"
                      value={jobData.location}
                      name="location"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Type d'emploi</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="temps plein, temps partiel, stagiere,...."
                      value={jobData.type}
                      name="type"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Tags</label>
                    <input
                      type="text"
                      placeholder="Private, urgent, freelence, ..."
                      class="form-control"
                      value={jobData.tags}
                      name="tags"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label >Experience requise</label>
                    <input
                      type="text"
                      placeholder="1-2ans"
                      class="form-control"
                      value={jobData.experience}
                      name="experience"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label >Description de l'emploi</label>
                    <textarea
                      id="your_message"
                      rows="3"
                      class="form-control"
                      name="description"
                      value={jobData.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div class="text-left">
                <button type="submit" class="btn create-ac-btn" onClick={handlePublish}>Envoyer</button>
              </div>
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
          </div>
        </div>
      </div >
    </div >
  )
}

export default NewJob