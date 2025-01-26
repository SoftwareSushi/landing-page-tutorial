import React from 'react';
import ssLogo from '../assets/ssLogo.png';

const Hero = () => (
  <section style={{ textAlign: 'center', padding: '2rem 1rem', backgroundColor: '#eef' }}>
    <h2>Welcome to Your Business</h2>
    <img src={ssLogo} alt="SS Logo" style={{ width: '100px', height: 'auto', margin: '0 auto' }} />
    <p>Your one-stop solution for [industry/services].</p>
    <button>Contact Us</button>
  </section>
);

export default Hero;