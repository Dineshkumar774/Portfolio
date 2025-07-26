import React from 'react';

const SocialIcons = () => {
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/dinesh-kumar-pamala',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn'
    },
    {
      url: 'https://github.com/Dineshkumar774',
      icon: 'fab fa-github',
      label: 'GitHub'
    },
    {
      url: 'https://leetcode.com/u/Dinesh_774/',
      icon: 'fas fa-code',
      label: 'LeetCode'
    }
  ];

  return (
    <footer className="footer">
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={link.icon}></i>
            <span className="social-label">{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default SocialIcons;
