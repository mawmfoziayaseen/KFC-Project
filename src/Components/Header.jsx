import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
      <img src="public\images\logo1.png"/>
      </div>
      <nav className="nav">
        <ul>
          <li>Delivery</li>
          <li>Menu</li>
          <li>Pick Up</li>
          <li>Offers</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
