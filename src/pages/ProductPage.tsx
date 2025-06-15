import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/Products/ProductDetail";
import { products } from "../data";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id || ""));

  if (!product) {
    return <div className="container my-5 pt-5">Producto no encontrado</div>;
  }

  return <ProductDetail product={product} />;
};

export default ProductPage;
