import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../../firebase";
import { useAppContext } from "../../context/AppContext";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/catalog";

  const handleLoginWithEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || email.length < 5) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const role = email === "admin@example.com" ? "admin" : "seller";
      login(email, role);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      login(result.user.email || "", "seller"); // Asignar rol 'seller' por defecto
      navigate(from, { replace: true });
    } catch (err) {
      setError("Error al iniciar sesión con Gmail.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLoginWithEmail}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Iniciar Sesión
                </button>
              </form>
              <button
                className="btn btn-outline-danger w-100 mb-3"
                onClick={handleLoginWithGoogle}
                aria-label="Iniciar sesión con Gmail"
              >
                <i className="fab fa-google me-2"></i> Iniciar Sesión con Gmail
              </button>
              <p className="text-center">
                <a href="/reset-password">¿Olvidaste tu contraseña?</a>
              </p>
              <p className="text-center">
                ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
