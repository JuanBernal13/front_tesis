import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="page-header">
      <div className="container text-center">
        <h2>{title}</h2>
        {subtitle && <p className="lead">{subtitle}</p>}
        <i className="fas fa-leaf fa-3x decorative-icon decorative-leaf-1"></i>
        <i className="fas fa-leaf fa-3x decorative-icon decorative-leaf-2"></i>
      </div>
    </header>
  );
};

export default Header;