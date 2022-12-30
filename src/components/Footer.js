import React from 'react';
import logoFooter from '../assets/images/logo_footer.png';

const Footer = () => {
      return (
            <footer className="footer__block">
                  <div className="footer__block--img">
                        <img
                              src={logoFooter}
                              alt="Logo de l'entrprise Kasa"
                              className="footer__block--img"
                        />
                  </div>
                  <p className="footer__block--text">
                        © 2020 Kasa. All rights reserved
                  </p>
            </footer>
      );
};

export default Footer;
