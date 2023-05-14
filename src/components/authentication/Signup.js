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
      <div class="page-title-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-title-text">
                <h2 >Créer un compte</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i class="icofont-simple-right"></i></li>
                  <li >Créer un compte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="create-photo">
          <div className="row align-items-center">
            <div class="col-lg-4">
              <div class="already-create">
                <span className="mb-2">Vous avez déja un compte ?</span>
                <Link to="/login">Se connecter</Link>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                onSubmit={handleSubmit}
              >
                <div class="create-photo-item">
                  <div class="create-photo-right">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Nom et prenom"
                        name="name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirm"
                        required
                      />
                    </div>
                    <div class="row">
                      <button
                        class="btn create-photo-btn"
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
