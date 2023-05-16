import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/profile")
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="page-wrapper login">
      <div class="page-title">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-title-text">
                <h2 >Connexion</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i class="icofont-simple-right"></i></li>
                  <li >Connexion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="create-photo">
          <div className="row align-items-center">
            <div class="col-lg-4">
              <div class="already-create">
                <span className="mb-2">Créer un compte ?</span>
                <Link to="/signup">S'inscrire</Link>
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
                    <div class="row">
                      <button
                        class="btn create-photo-btn"
                        disabled={loading}
                        type="submit"
                      >
                        Se connecter
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
    </div >
  );
}
