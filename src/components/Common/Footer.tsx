import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: soporte@tienda.com</p>
            <p>Teléfono: +1 123 456 7890</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <p>Enlaces a redes sociales</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
