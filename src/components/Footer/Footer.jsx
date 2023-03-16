import React from 'react';
import footergb from '../../assets/footer-bg.jpg';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${footergb})` }}>
      <div className="icon">
        <img style={{ width: '4rem' }} src="/vite.svg" alt="D3Movies" />
        <p>D3Movies</p>
      </div>
      <div className="moreinfo">
        <div className="info">
          <h4>home</h4>
          <h4>contact us</h4>
          <h4>term of services</h4>
          <h4>about us</h4>
        </div>
        <div className="info">
          <h4>live</h4>
          <h4>FAQ</h4>
          <h4>premium</h4>
          <h4>privacy policy</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
