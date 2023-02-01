import React, { useState } from 'react';

const NavBar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <header>
      <div id="brand">
        <a href="/">PlayStation Store</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/products">Search</a>
          </li>
          <li>
            <a href="/about">Backet</a>
          </li>
        </ul>
      </nav>
      <div id="hamburger-icon" className={isActive ? 'open' : 'close'} onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <ul className="mobile-menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/products">Search</a>
          </li>
          <li>
            <a href="/about">Backet</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
