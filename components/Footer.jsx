import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center">
          <p><i className="fas fa-pills me-2"></i> Mejorando la atención médica con tecnología <i className="fas fa-heartbeat ms-2"></i></p>
          <p>&copy; {new Date().getFullYear()} Sistema de Predicción de Antibióticos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;