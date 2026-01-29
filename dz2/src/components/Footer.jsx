import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-container">
    
      <div className="sketchbook-promo">
        <div className="promo-content">
          <h2 className="promo-title">Simple скетчбук</h2>
          <p className="promo-text">
            80 листов, твердая обложка, бумага Fabriano 200 г/м². 
            Подойдет и для графики и для акварели. Для самых 
            смелых творческих замыслов!
          </p>
          <button className="buy-button">Купить</button>
        </div>
        <div className="promo-image-container">
          
          <div className="sketchbook-mockup"></div>
        </div>
      </div>

   
      <div className="footer-bottom-bar">
        <div className="footer-logo">
          <span className="footer-circle"></span> simple <span className="footer-pill"></span>
        </div>
        <div className="social-icons">
          <a href="#" className="social-link">f</a>
          <a href="#" className="social-link">t</a>
          <a href="#" className="social-link">i</a>
          <a href="#" className="social-link">y</a>
        </div>
      </div>

      <div className="footer-copyright">
        SIMPLE © 2021
      </div>
    </footer>
  );
};

export default Footer;