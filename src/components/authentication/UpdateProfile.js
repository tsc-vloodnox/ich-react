import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const displayName = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail, upload } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    if (displayName.current.value) {
      promises.push(UpdateProfile(displayName.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/profil");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="update-profile">
      <div className="row align-items-center">
        <div class="col-lg-4 left-part">
          <img src={currentUser.photoURL} alt="Avatar" className="avatar" width={80} />
          <div className="upload">
            <label htmlFor="file">Changer</label>
            <input
              type="file"
              id="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleChange}
            />
            <br />
            <button disabled={loading || !photo} onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-upload"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 9 12 4 17 9" />
                <line x1="12" y1="4" x2="12" y2="16" />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <form onSubmit={handleSubmit}>
            <div id="email" className="form-group">
              <label>Non d'utilisateur :</label>
              <input
                className="form-control"
                type="text"
                ref={displayName}
                required
                defaultValue={currentUser.displayName}
              />
            </div>
            <div id="email" className="form-group">
              <label>Email :</label>
              <input
                className="form-control"
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </div>
            <div id="password" className="form-group">
              <label>Password :</label>
              <input
                className="form-control"
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div id="password-confirm" className="form-group">
              <label>Password Confirmation :</label>
              <input
                className="form-control"
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div className="text-center">
              <button disabled={loading} className="" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <span variant="danger">{error}</span>}
      <div className="w-100 text-center mt-2">
        <Link to="/forget-password">Mot de passe oublier</Link>
      </div>
    </div>
  );
}
