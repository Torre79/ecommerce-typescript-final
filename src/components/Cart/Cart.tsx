import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useAppContext } from "../../context/AppContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart, user } = useAppContext();
  const navigate = useNavigate();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const clearCart = () => {
    cart.forEach((item) => removeFromCart(item.product.id));
  };

  const handleProceedToCheckout = () => {
    if (!user) {
      navigate("/login", { state: { from: "/cart" } }); // Redirigir a login con página de origen
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="container my-5 pt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="list-group mb-4">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <div className="text-end">
            <button
              className="btn btn-danger me-2"
              onClick={clearCart}
              aria-label="Vaciar carrito"
            >
              Vaciar Carrito
            </button>
            <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
            <button
              className="btn btn-success"
              onClick={handleProceedToCheckout}
              aria-label="Proceder al pago"
            >
              Proceder al Pago
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
