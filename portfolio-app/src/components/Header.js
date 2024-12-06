import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="social-links">
          <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
            <img src="https://image.shutterstock.com/image-vector/email-icon-vector-illustration-260nw-1715037844.jpg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://i.pinimg.com/736x/92/d1/db/92d1db1521d374335498624cc95e9554.jpg" alt="LinkedIn" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="https://i.pinimg.com/736x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg" alt="GitHub" />
          </a>
        </div>
        <div className="nav-links">
          <Link to="projects" smooth={true}>Projects</Link>
          <Link to="contact" smooth={true}>Contact Me</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
