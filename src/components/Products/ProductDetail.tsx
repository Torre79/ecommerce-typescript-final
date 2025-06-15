import React, { useState } from "react";
import { Product, Review } from "../../types";
import { useAppContext } from "../../context/AppContext";
import ProductReview from "./ProductReview";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useAppContext();
  const [showToast, setShowToast] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(product.reviews || []);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAddReview = (review: Review) => {
    setReviews([...reviews, review]);
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <div className="container my-5 pt-5">
      {showToast && (
        <div
          className="toast show position-fixed top-0 end-0 m-3"
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
      <div className="row">
        <div className="col-md-6">
          {!imageLoaded && (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: 300 }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          )}
          <img
            src={product.image}
            className="img-fluid rounded"
            alt={product.name}
            style={{ display: imageLoaded ? "block" : "none" }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Categoría: {product.category}</p>
          <div className="mb-2">
            {averageRating > 0 ? (
              <>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`fa fa-star ${
                      i < Math.round(averageRating)
                        ? "text-warning"
                        : "text-muted"
                    }`}
                    aria-hidden="true"
                  ></span>
                ))}
                <span className="ms-2">({reviews.length} reseñas)</span>
              </>
            ) : (
              <p>Sin reseñas aún.</p>
            )}
          </div>
          <p>{product.description}</p>
          <h3>${product.price.toFixed(2)}</h3>
          <p>Stock: {product.stock > 0 ? product.stock : "Sin Stock"}</p>
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
      <div className="mt-5">
        <h3>Reseñas</h3>
        {reviews.length === 0 ? (
          <p>No hay reseñas para este producto.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="card mb-3 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{review.user}</h5>
                  <span>{review.date}</span>
                </div>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`fa fa-star ${
                        i < review.rating ? "text-warning" : "text-muted"
                      }`}
                      aria-hidden="true"
                    ></span>
                  ))}
                </div>
                <p className="card-text">{review.comment}</p>
              </div>
            </div>
          ))
        )}
        <ProductReview productId={product.id} onAddReview={handleAddReview} />
      </div>
    </div>
  );
};

export default ProductDetail;
