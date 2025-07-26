import React from 'react';

const ThemeToggle = ({ theme, onToggle }) => {
  // Decide the icon based on the current theme
  const iconClass = theme === 'skyblue' ? 'fas fa-tint' : 'fas fa-sun';

  return (
    <button className="theme-toggle" onClick={onToggle}>
      <i className={iconClass}></i>
    </button>
  );
};

export default ThemeToggle;
