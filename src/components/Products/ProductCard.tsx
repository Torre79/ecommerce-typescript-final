import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";
import { useAppContext } from "../../context/AppContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useAppContext();
  const [showToast, setShowToast] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="card h-100 shadow-sm position-relative">
      {showToast && (
        <div
          className="toast show position-absolute top-0 start-50 translate-middle-x"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ zIndex: 10 }}
        >
          <div className="toast-header bg-success text-white">
            <strong className="me-auto">Éxito</strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => setShowToast(false)}
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="toast-body">¡{product.name} agregado al carrito!</div>
        </div>
      )}
      {!imageLoaded && (
        <div
          className="card-img-top d-flex align-items-center justify-content-center"
          style={{ height: 200 }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <Link
          to={`/product/${product.id}`}
          className="btn btn-outline-primary me-2"
          aria-label={`Ver detalles de ${product.name}`}
        >
          Ver Detalles
        </Link>
        <button
          className="btn btn-primary"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          {product.stock > 0 ? "Agregar al Carrito" : "Sin Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
