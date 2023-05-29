import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Timestamp, collection, addDoc, updateDoc, increment, query, onSnapshot, doc } from "firebase/firestore";
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

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const location = `${city} - ${country}`;
  const [jobType, setJobType] = useState("");
  const [tagsChaine, setTagsChaine] = useState("");
  const [tagsList, setTagsList] = useState("");

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

  const [jobData, setJobData] = useState({
    jobName: "",
    categoryName: "",
    categoryID: "",
    company: "",
    salary: "",
    vacancies: "",
    location: "",
    jobType: "",
    description: "",
    tags: [],
    experience: "",
    jobPic: "",
    createdAt: Timestamp.now().toDate(),
  });
  const cancelPost = () => {
    setJobData({
      jobName: "",
      categoryName: "",
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

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setJobData({ ...jobData, categoryName: e.target.value });
  };
  const handleImageChange = (e) => {
    setJobData({ ...jobData, jobPic: e.target.files[0] });
  };

  const handlePublish = async () => {

    try {
      const jobRef = collection(db, "Jobs");
      const selectedCategory = categorys.find(category => category.name === jobData.categoryName);
      const categoryRef = doc(db, "Category", selectedCategory.id);
      let jobPicUrl = null;

      if (jobData.jobPic) {
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
      console.log(jobData)
      await addDoc(jobRef, {
        jobName: jobData.jobName,
        categoryName: jobData.categoryName,
        categoryID: selectedCategory.id,
        company: jobData.company,
        salary: jobData.salary,
        vacancies: jobData.vacancies,
        location: location,
        jobType: jobType,
        description: jobData.description,
        tags: tagsList,
        experience: jobData.experience,
        jobPic: jobPicUrl,
        createdAt: Timestamp.now().toDate(),
        createdBy: currentUser.displayName,
        posterPic: currentUser.photoURL,
        userId: currentUser.uid,
        likes: [],
      });

      await updateDoc(categoryRef, {
        jobCount: increment(1)
      });

      toast("Job added successfully", { type: "success" });
      setProgress(0);
      cancelPost();
    } catch (error) {
      toast("Error adding job", { type: "error" });
      console.log(error);
    }
  };

  return (
    <div className='page-wrapper'>
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Post A Job</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i></li>
                  <li >Post A Job</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="post-job pt-100">
        <div className="container">
          <div className="post-job-item">
            <div className="form">
              <div className="post-job-heading">
                <h2 >Publier votre emploi</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="jobPic"
                      accept='image/*'
                      onChange={(e) => handleImageChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Titre du poste</label>
                    <input
                      type="text"
                      placeholder="UX/UI Designer"
                      className="form-control"
                      value={jobData.jobName}
                      name="jobName"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Categories</label>
                    <select
                      className="form-control form-select"
                      name="categoryName"
                      value={jobData.categoryName}
                      required
                      onChange={handleCategoryChange}
                    >
                      <option value="">Choisir la Catégorie</option>
                      {categorys.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Nom de l'entreprise</label>
                    <input
                      type="text"
                      placeholder="Winbrans.com"
                      className="form-control"
                      name="company"
                      required
                      value={jobData.company}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="job-currency">
                      <label >Salaire</label>
                      <input
                        type="text"
                        placeholder="$1500-2400/m"
                        className="form-control"
                        value={jobData.salary}
                        name="salary"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Postes vacants</label>
                    <input
                      type="text"
                      placeholder="10"
                      className="form-control"
                      name="vacancies"
                      value={jobData.vacancies}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label">Lieu d'implantation</label>
                    <div className="d-flex">
                      <input
                        className="form-control"
                        placeholder="address"
                        name="city"
                        onChange={(event) => setCity(event.target.value)}
                      />
                      <select
                        className="form-select form-control"
                        value={country}
                        required
                        name="country"
                        onChange={(event) => setCountry(event.target.value)}
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
                        <option value="CIV">Cote D'Ivoire</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label">Type d'emploi</label>
                    <select
                      className="form-control form-select"
                      name="jobType"
                      required
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
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Tags</label>
                    <input
                      type="text"
                      placeholder="Private, urgent, freelence, ..."
                      className="form-control"
                      name="tags"
                      value={tagsChaine}
                      onChange={handleTagsChaineChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Experience requise</label>
                    <input
                      type="text"
                      placeholder="1-2ans"
                      className="form-control"
                      value={jobData.experience}
                      name="experience"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label >Description de l'emploi</label>
                    <textarea
                      id="your_message"
                      rows="3"
                      className="form-control"
                      name="description"
                      required
                      value={jobData.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <button type="submit" className="btn create-ac-btn" onClick={handlePublish}>Envoyer</button>
                <button className="btn create-ac-btn mx-2" onClick={cancelPost}>
                  Annuler
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