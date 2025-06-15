import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, sendPasswordResetEmail } from '../../firebase';

const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || email.length < 5) {
      setError('Por favor, ingresa un correo válido.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Se ha enviado un enlace de restablecimiento a tu correo.');
      setError('');
      setEmail('');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError('Error al enviar el enlace. Verifica el correo.');
      setSuccess('');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Recuperar Contraseña</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Enviar Enlace de Recuperación
                </button>
              </form>
              <p className="text-center mt-3">
                <a href="/login">Volver al inicio de sesión</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

