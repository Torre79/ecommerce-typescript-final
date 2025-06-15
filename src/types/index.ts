export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

// Definición de tipos para productos, ítems del carrito, usuarios y datos de ventas
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  description: string;
  reviews?: Review[]; // Reseñas opcionales
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  email: string;
  role: "seller" | "admin";
}

export interface SalesData {
  day: string;
  sales: number;
}
