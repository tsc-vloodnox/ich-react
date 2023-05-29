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
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Connexion</h2>
                <ul >
                  <li ><a href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i></li>
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
            <div className="col-lg-4">
              <div className="already-create">
                <span className="mb-2">Créer un compte ?</span>
                <Link to="/signup">S'inscrire</Link>
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
                    <div className="row">
                      <button
                        className="btn create-photo-btn"
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
