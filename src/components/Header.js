import React from 'react';

const Header = () => (
  <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
    <h1>Your Business Name</h1>
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);
export default Header;