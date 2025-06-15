import React from "react";
import { CartItem as CartItemType } from "../../types";
import { useAppContext } from "../../context/AppContext";

// Componente para un ítem individual en el carrito
interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useAppContext();

  return (
    <div className="list-group-item">
      <div className="row align-items-center">
        <div className="col-md-2">
          <img
            src={item.product.image}
            className="img-fluid"
            alt={item.product.name}
          />
        </div>
        <div className="col-md-4">
          <h5>{item.product.name}</h5>
          <p>${item.product.price.toFixed(2)}</p>
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            value={item.quantity}
            min="1"
            max={item.product.stock}
            onChange={(e) =>
              updateQuantity(item.product.id, parseInt(e.target.value))
            }
          />
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(item.product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
