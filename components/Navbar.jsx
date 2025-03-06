import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fas fa-pills me-2"></i>
          Sistema de Predicción de Antibióticos
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-home me-2"></i>Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="fas fa-info-circle me-2"></i>Acerca De
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#help">
                <i className="fas fa-question-circle me-2"></i>Ayuda
              </a>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#login">
                <i className="fas fa-sign-in-alt me-2"></i>Ingresar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;