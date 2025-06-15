import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const CheckoutPage: React.FC = () => {
  const { cart, removeFromCart, user } = useAppContext();
  const navigate = useNavigate();
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!user) {
    return <Navigate to="/login" state={{ from: "/checkout" }} />;
  }

  const handleConfirmPurchase = () => {
    cart.forEach((item) => removeFromCart(item.product.id)); // Vaciar carrito
    navigate("/"); // Redirigir a la página principal
  };

  return (
    <div className="container my-5 pt-5">
      <h2>Confirmación de Compra</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title">Resumen de tu pedido</h3>
          <ul className="list-group list-group-flush">
            {cart.map((item) => (
              <li key={item.product.id} className="list-group-item">
                {item.product.name} x {item.quantity} - $
                {(item.product.price * item.quantity).toFixed(2)}
              </li>
            ))}
            <li className="list-group-item fw-bold">
              Total: ${total.toFixed(2)}
            </li>
          </ul>
          <div className="mt-4 text-end">
            <button
              className="btn btn-primary"
              onClick={handleConfirmPurchase}
              aria-label="Confirmar compra"
            >
              Confirmar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
