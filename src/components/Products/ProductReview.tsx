import React, { useState } from "react";
import { Review } from "../../types";
import { useAppContext } from "../../context/AppContext";

interface ProductReviewProps {
  productId: number;
  onAddReview: (review: Review) => void;
}

const ProductReview: React.FC<ProductReviewProps> = ({
  productId,
  onAddReview,
}) => {
  const { user } = useAppContext();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError("Debes iniciar sesión para dejar una reseña.");
      return;
    }
    if (rating < 1 || rating > 5) {
      setError("Por favor, selecciona una calificación entre 1 y 5 estrellas.");
      return;
    }
    if (comment.trim().length < 10) {
      setError("El comentario debe tener al menos 10 caracteres.");
      return;
    }
    const review: Review = {
      user: user.email,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    };
    onAddReview(review);
    setRating(0);
    setComment("");
    setError("");
  };

  return (
    <div className="mt-4">
      <h4>Deja tu reseña</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Calificación</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`fa fa-star ${
                  rating >= star ? "text-warning" : "text-muted"
                }`}
                style={{ cursor: "pointer", fontSize: "1.5rem" }}
                onClick={() => setRating(star)}
                aria-label={`Calificar con ${star} estrella${
                  star > 1 ? "s" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor={`comment-${productId}`} className="form-label">
            Comentario
          </label>
          <textarea
            id={`comment-${productId}`}
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            required
            aria-label="Comentario"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          aria-label="Enviar reseña"
        >
          Enviar Reseña
        </button>
      </form>
    </div>
  );
};

export default ProductReview;
