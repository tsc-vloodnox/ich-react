import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(
        "Vérifiez votre boîte de réception pour de nouvelles instructions"
      );
    } catch {
      setError("Échec de la réinitialisation du mot de passe");
    }

    setLoading(false);
  }

  return (
    <div className="page-wrapper">
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Réinitialiser Mon Mot De Passe</h2>
                <ul >
                  <li >
                    <a href="/">Home</a>
                  </li>
                  <li >
                    <i className="icofont-simple-right"></i>
                  </li>
                  <li >ForgotPassword</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-4">Réinitialisation du mot de passe</h2>
          {error && <span variant="danger">{error}</span>}
          {message && <span variant="success">{message}</span>}
          <form onSubmit={handleSubmit}>
            <div id="email" className="form-group">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" ref={emailRef} required />
            </div>
            <div className="text-center mt-2">
              <button disabled={loading} className="btn border" type="submit">
                Réinitialiser
              </button></div>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Connexion</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        Créer un compte? <Link to="/signup">S'inscrire</Link>
      </div>
    </div>
  );
}
