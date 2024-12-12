import React from "react";
import "./Header.css";

const Header = ({ categorias }) => {
  return (
    <header className="header">
      <div className="netflixLogo">
        <a href="/">
          <img
            src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
            alt="Logo"
          />
        </a>
      </div>
      <nav className="main-nav">
        {categorias &&
          Object.keys(categorias).map((category) => (
            <a key={category} href={`#${category.replace(/\s+/g, "-").toLowerCase()}`}>
              {category}
            </a>
          ))}
      </nav>
    </header>
  );
};

export default Header;
