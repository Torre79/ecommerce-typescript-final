import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container my-5 pt-5">
      <h2>Sobre HerbaVida</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="lead">
            En <strong>HerbaVida</strong>, estamos comprometidos con promover la
            salud y el bienestar a través de productos naturales. Nuestra tienda
            ofrece una amplia selección de plantas medicinales, hierbas secas,
            extractos naturales, suplementos, cosmética natural, y tés
            aromáticos, todos elaborados con ingredientes de alta calidad y
            respetando la naturaleza.
          </p>
          <p>
            Creemos en el poder de las plantas para mejorar la calidad de vida.
            Trabajamos directamente con productores locales para garantizar
            productos frescos y sostenibles, apoyando a las comunidades y
            cuidando el medio ambiente.
          </p>
          <p>
            Únete a nuestra misión de vivir en armonía con la naturaleza.
            ¡Explora nuestro catálogo y descubre los beneficios de lo natural!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
