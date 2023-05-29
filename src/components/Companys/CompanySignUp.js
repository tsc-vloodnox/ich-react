import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../firebaseConfig';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from "react-toastify";

const CompanySignUp = () => {
  const { currentUser } = useAuth();

  const [progress, setProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [companyData, setCompanyData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    description: "",
    established: "",
    logo: "",
    docs: "",
    team: [],
    socialLinks: [],
    likes: [],
    statut: "",
  });

  useEffect(() => {
    const userRef = collection(db, "Users");
    const q = query(userRef);
    onSnapshot(q, (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(users);
    });
  }, []);


  useEffect(() => {
    const filtered = users.filter(user => user.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(filtered);
  }, [searchTerm])

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const address = `${city} - ${country}`;
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
    whatsapp: ""
  });



  const handleUserClick = (userId) => {
    const isSelected = selectedUsers.includes(userId);

    if (isSelected) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  }

  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setCompanyData({ ...companyData, logo: e.target.files[0] });
  };

  const handleDocChange = (e) => {
    setCompanyData({ ...companyData, docs: e.target.files[0] });
  };


  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value
    }));
  };




  function handleCreateCompanyProfile(e) {
    e.preventDefault();

    createCompanyProfile(companyData, currentUser.uid)
      .then(() => {
        toast("Profil entreprise créé avec succès");
        window.location.reload();
      })
      .catch((error) => {
        toast("Erreur lors de la création du profil de candidat", error);
      });
  }

  async function createCompanyProfile(companyData, userId) {
    const companyRef = doc(db, "Companys", userId);
    let logoUrl = null;
    let docs = null;
    if (companyData.logo) {
      const storageRef = ref(storage, `/images/${Date.now()}${companyData.logo.name}`);
      const uploadImage = uploadBytesResumable(storageRef, companyData.logo);

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
      logoUrl = await getDownloadURL(uploadImage.snapshot.ref);
    }
    if (companyData.docs) {
      const storageRef = ref(storage, `/documents/${Date.now()}${companyData.docs.name}`);
      const uploadDoc = uploadBytesResumable(storageRef, companyData.docs);

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
      docs = await getDownloadURL(uploadDoc.snapshot.ref);
    }

    return setDoc(companyRef, {
      userID: userId,
      companyName: companyData.companyName,
      email: companyData.email,
      phone: companyData.phone,
      address: address,
      website: companyData.website,
      description: companyData.description,
      established: companyData.established,
      logo: logoUrl,
      docs: docs,
      team: selectedUsers,
      socialLinks: socialLinks,
      likes: [],
      statut: "pending"
    }).then(() => {
      console.log("profile utilisateur mise a jour")
    }).catch((error) => {
      console.error("une erreur s'est produite", error)
    })
  }

  return (
    <div className='page-wrapper'>
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Rejoignez les entreprise partenaire</h2>
                <ul >
                  <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i>
                  </li>
                  <li >CompanySignUp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="post-job-item">
          <form onSubmit={handleCreateCompanyProfile}>
            <div className="post-job-heading">
              <h2 >Renseigner ce formulaire</h2>
            </div>
            <div className="mt-4 form-group">
              <h5 className="fs-17 fw-semibold mb-3">Infos de base</h5>
              <div className="row">

                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Nom de l'enterprise</label>
                    <input
                      type="text"
                      placeholder="The Spectrum Company"
                      className="form-control"
                      name='companyName'
                      value={companyData.companyName}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Date de creation</label>
                    <input
                      type="date"
                      className="form-control"
                      name='established'
                      value={companyData.established}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Site web</label>
                    <input
                      type="text"
                      placeholder="www.exemple.com"
                      className="form-control"
                      name='website'
                      value={companyData.website}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="job-currency">
                      <label >Email</label>
                      <input
                        type="email"
                        placeholder="contact@exemple.com"
                        className="form-control"
                        name='email'
                        value={companyData.email}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label >Contact</label>
                    <input
                      type="text"
                      placeholder="+225 00 00 00 00 00"
                      className="form-control"
                      name='phone'
                      value={companyData.phone}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label">Lieu d'implantation</label>
                    <div className="d-flex">
                      <input
                        type='text'
                        className="form-control"
                        placeholder="address"
                        name="city"
                        onChange={(event) => setCity(event.target.value)}
                      />
                      <select
                        className="form-select form-control"
                        name="country"
                        onChange={(event) => setCountry(event.target.value)}
                        required
                      >
                        <option value="">Coisir un pays</option>
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
                <div className="col-lg-12">
                  <div className="form-group">
                    <label >Description de l'emploi</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      name="description"
                      value={companyData.description}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 form-group">
                <h5 className="fs-17 fw-semibold mb-3">Documents</h5>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Certifications ou autres</label>
                      <input
                        type="file"
                        className="form-control"
                        name='docs'
                        accept='.pdf'
                        onChange={(e) => handleDocChange(e)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label >Logo de l'entreprise</label>
                      <input
                        type="file"
                        className="form-control"
                        name='logo'
                        accept='image/*'
                        onChange={(e) => handleImageChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 form-group">
                <h5 className="fs-17 fw-semibold mb-3">Team</h5>
                <p>selectionner les utilisateur pouvant poster au nom de l'emtreprise</p>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <input
                        type='search'
                        className='form-control'
                        placeholder='rechercher par nom'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <ul className='border team-list'>
                        {filteredUsers.map(user => (
                          <li
                            key={user.id}
                            onClick={() => handleUserClick(user.id)}
                            style={{ background: selectedUsers.includes(user.id) ? 'yellow' : 'transparent', cursor: "pointer" }}
                          >
                            {user.fullName}
                          </li>
                        ))}
                      </ul>
                      {selectedUsers.length > 0 &&
                        selectedUsers.map(userId => (
                          <p>Membre :{userId}</p>
                        ))
                      }
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
            </div>
            <div className="text-left">
              <button type="submit" className="btn create-ac-btn">Envoyer</button>
              <button className="btn create-ac-btn mx-2">
                Annuler message
              </button>
            </div>
          </form>
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
  )
}

export default CompanySignUp