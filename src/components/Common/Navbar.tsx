import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Navbar: React.FC = () => {
  const { user, logout, cart } = useAppContext();
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const collapseRef = useRef<HTMLDivElement>(null);
  const togglerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const toggler = togglerRef.current;
    const collapse = collapseRef.current;

    if (toggler && collapse) {
      const showMenu = () => {
        collapse.classList.add("show");
        toggler.setAttribute("aria-expanded", "true");
      };

      const hideMenu = () => {
        collapse.classList.remove("show");
        toggler.setAttribute("aria-expanded", "false");
      };

      toggler.addEventListener("mouseenter", showMenu);
      toggler.addEventListener("mouseleave", hideMenu);
      collapse.addEventListener("mouseenter", showMenu);
      collapse.addEventListener("mouseleave", hideMenu);

      return () => {
        toggler.removeEventListener("mouseenter", showMenu);
        toggler.removeEventListener("mouseleave", hideMenu);
        collapse.removeEventListener("mouseenter", showMenu);
        collapse.removeEventListener("mouseleave", hideMenu);
      };
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://cdn.pixabay.com/photo/2023/01/31/01/50/crown-7756927_640.png"
            alt="Logo HerbaVida"
            width="50"
            className="me-2"
          />
          <span className="navbar-brand-text">HerbaVida</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/catalog"
              >
                Catálog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/contact"
              >
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/cart"
              >
                <i className="fas fa-shopping-cart me-1"></i>
                Carrito <span className="badge bg-primary">{cartCount}</span>
              </NavLink>
            </li>
            {user?.role === "admin" && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/admin"
                >
                  Panel Admin
                </NavLink>
              </li>
            )}
            {user ? (
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  aria-label="Cerrar sesión"
                >
                  Cerrar Sesión
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to="/login"
                  >
                    Iniciar Sesión
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to="/register"
                  >
                    Registrarse
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
