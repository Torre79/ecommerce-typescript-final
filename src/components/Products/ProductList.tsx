import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../types";

interface ProductListProps {
  products: Product[];
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = ({ products, limit }) => {
  const [category, setCategory] = useState("all");
  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="category-filter" className="form-label">
          Filtrar por categoría:
        </label>
        <select
          id="category-filter"
          className="form-select w-auto"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filtrar por categoría"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "Todas" : cat}
            </option>
          ))}
        </select>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {displayedProducts.map((product) => (
          <div key={product.id} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
