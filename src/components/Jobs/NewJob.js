import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Timestamp, collection, addDoc, updateDoc, increment, query, onSnapshot } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, } from "../../firebaseConfig";
import { toast } from "react-toastify";


const NewJob = () => {
  const { currentUser } = useAuth();

  const [categorys, setCategorys] = useState([]);
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

  const [jobData, setJobData] = useState({
    jobName: "",
    categoryId: "",
    company: "",
    salary: "",
    vacancies: "",
    location: "",
    jobType: "",
    description: "",
    tags: "",
    experience: "",
    jobPic: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setJobData({ ...jobData, categoryId: e.target.value }); // Mise à jour de la propriété categoryId
  };
  const handleImageChange = (e) => {
    setJobData({ ...jobData, jobPic: e.target.files[0] });
  };

  const handlePublish = async () => {
    if (!jobData.jobName) {
      alert("Veuillez entrer un message");
      return;
    }

    try {
      const jobRef = collection(db, "Jobs");
      const categoryRef = collection(db, "Categories").doc(jobData.categoryId);
      let jobPicUrl = null;

      if (jobData.jobPic) {
        // Téléchargement de l'image et récupération de l'URL
        const storageRef = ref(storage, `/images/${Date.now()}${jobData.jobPic.name}`);
        const uploadImage = uploadBytesResumable(storageRef, jobData.jobPic);

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
        jobPicUrl = await getDownloadURL(uploadImage.snapshot.ref);
      }

      // Ajout du document du nouvel emploi dans la collection "Jobs"
      await addDoc(jobRef, {
        jobName: jobData.jobName,
        categoryId: jobData.categoryId,
        company: jobData.company,
        salary: jobData.salary,
        vacancies: jobData.vacancies,
        location: jobData.location,
        jobType: jobData.jobType,
        description: jobData.description,
        tags: jobData.tags,
        experience: jobData.experience,
        jobPic: jobPicUrl,
        createdAt: Timestamp.now().toDate(),
        createdBy: currentUser.displayName,
        posterPic: currentUser.photoURL,
        userId: currentUser.uid,
        likes: [],
      });

      // Incrémentation du jobCount de la catégorie correspondante
      await updateDoc(categoryRef, {
        jobCount: increment(1)
      });

      toast("Job added successfully", { type: "success" });
      setProgress(0);
      setJobData({
        jobName: "",
        categoryId: "",
        company: "",
        salary: "",
        vacancies: "",
        location: "",
        jobType: "",
        description: "",
        tags: "",
        experience: "",
        jobPic: "",
      });
    } catch (error) {
      toast("Error adding job", { type: "error" });
      console.log(error);
    }
  };

  const cancelPost = () => {
    setJobData({
      jobName: "",
      categoryId: "",
      company: "",
      salary: "",
      vacancies: "",
      location: "",
      jobType: "",
      description: "",
      tags: "",
      experience: "",
      jobPic: "",
    });
  };

  return (
    <div className='page-wrapper'>
      <div class="page-title">
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
                      name="jobPic"
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
                      value={jobData.jobName}
                      name="jobName"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Categories</label>
                    <select
                      className="form-control form-select"
                      name="categoryId"
                      value={jobData.categoryId}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Choisir la Catégorie</option>
                      {categorys.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
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
                      value={jobData.jobType}
                      name="jobType"
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
                <button className="btn create-ac-btn" onClick={cancelPost}>
                  Annuler message
                </button>
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