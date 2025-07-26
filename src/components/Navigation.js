import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
     { id: 'about', label: 'About', path: '/about' },
  ];

  return (
    <nav className="nav">
      {navItems.map(item => (
        <Link
          key={item.id}
          to={item.path}
          className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
