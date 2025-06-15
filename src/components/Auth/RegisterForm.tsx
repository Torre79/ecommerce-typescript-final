import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "../../firebase";
import { useAppContext } from "../../context/AppContext";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAppContext();

  const handleRegisterWithEmail = async (e: React.FormEvent) => {
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      login(email, "seller"); // Asignar rol 'seller' por defecto
      navigate("/catalog");
    } catch (err) {
      setError("Error al registrar. Verifica tus datos o intenta con Gmail.");
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      login(result.user.email || "", "seller"); // Asignar rol 'seller'
      navigate("/catalog");
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
              <h3 className="card-title text-center mb-4">Crear Cuenta</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleRegisterWithEmail}>
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
                  Registrarse
                </button>
              </form>
              <button
                className="btn btn-outline-danger w-100"
                onClick={handleRegisterWithGoogle}
                aria-label="Registrarse con Gmail"
              >
                <i className="fab fa-google me-2"></i> Registrarse con Gmail
              </button>
              <p className="text-center mt-3">
                ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
