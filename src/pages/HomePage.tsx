import React, { useEffect } from "react";
import ProductList from "../components/Products/ProductList";
import { products } from "../data";
import { carouselData, CarouselItem } from "../data/carouselData";

const HomePage: React.FC = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("homeCarousel");
    if (carouselElement) {
      if (window.bootstrap && window.bootstrap.Carousel) {
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: "carousel",
        });
        carousel.cycle();
      } else {
        console.error(
          "Bootstrap Carousel no está disponible. Verifica que el script de Bootstrap esté cargado en index.html."
        );
      }
    } else {
      console.error("Elemento del carrusel no encontrado.");
    }
  }, []);

  return (
    <div className="container my-5 pt-5">
      <div className="jumbotron text-center mb-5">
        <h1 className="display-4">Bienvenidos a HerbaVida</h1>
        <p className="lead">
          Descubre el poder de la naturaleza con nuestras plantas medicinales,
          extractos, cosméticos naturales y tés aromáticos. ¡Vive saludable,
          vive natural!
        </p>
      </div>
      <div
        id="homeCarousel"
        className="carousel slide mb-5 shadow-lg rounded"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          {carouselData.map((item: CarouselItem, index: number) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.image}
                className="d-block w-100 rounded"
                alt={item.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
          aria-label="Anterior"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
          aria-label="Siguiente"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <h3 className="my-4">Productos Destacados</h3>
      <ProductList products={products} limit={4} />
    </div>
  );
};

export default HomePage;
