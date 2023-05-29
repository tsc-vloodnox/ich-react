import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
export default function Signup() {
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    if (password !== passwordConfirm) {
      return setError("Les mots de passe ne correspondent pas");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password)
        .then(async (userAuth) => {
          console.log(useAuth)
          const defaultRole = "user";
          const userRef = db.collection("Users").doc(userAuth.user.uid);
          await userRef.set({
            fullName: displayName,
            email: email,
            role: defaultRole,
          });
          await userAuth.user.updateProfile({
            displayName,
          });
        });
      navigate("/profile")
    } catch {
      setError("Erreur lors de la creeation du compte");
    }
    setLoading(false);
  };

  return (
    <div className="page-wrapper signup">
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Créer un compte</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i></li>
                  <li >Créer un compte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="create-photo">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="already-create">
                <span className="mb-2">Vous avez déja un compte ?</span>
                <Link to="/login">Se connecter</Link>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                onSubmit={handleSubmit}
              >
                <div className="create-photo-item">
                  <div className="create-photo-right">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Nom et prenom"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirm"
                        required
                      />
                    </div>
                    <div className="row">
                      <button
                        className="btn create-photo-btn"
                        disabled={loading}
                        type="submit"
                      >
                        S'inscrire
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {error && <span variant="danger">{error}</span>}
        </div>
      </div>
    </div>
  );
}
