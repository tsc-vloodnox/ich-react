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
    <div>
      <div>
        <div>
          <h2 className="text-center mb-4">Réinitialisation du mot de passe</h2>
          {error && <span variant="danger">{error}</span>}
          {message && <span variant="success">{message}</span>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit">
              Réinitialiser
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Connexion</Link>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Créer un compte? <Link to="/signup">S'inscrire</Link>
      </div>
    </div>
  );
}
