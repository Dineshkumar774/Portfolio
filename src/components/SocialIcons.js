import React from 'react';

const SocialIcons = () => {
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/dinesh-kumar-pamala',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://github.com/Dineshkumar774',
      icon: 'fab fa-github'
    },
    {
        url:'https://leetcode.com/u/Dinesh_774/',
        icon:'fab fa-leetcode'
    }
  ];

  return (
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
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 