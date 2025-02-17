import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__content">
          <div className="footer-section">
            <h3>Mijozlar uchun</h3>
            <ul>
              <li>
                <a href="#">Bu qanday ishlaydi?</a>
              </li>
              <li>
                <a href="#">Bizning hamkorlarimiz</a>
              </li>
              <li>
                <a href="#">Ko'p beriladigan savollar</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Kompaniya haqida</h3>
            <ul>
              <li>
                <a href="#">Ish o'rinlari</a>
              </li>
              <li>
                <a href="#">Ommaviy oferta</a>
              </li>
              <li>
                <a href="#">Maxfiylik siyosati</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h3>Aloqa markazi</h3>
          <ul>
            <li>+998 (99) 571-19-82</li>
            <li>javohirrahimberganov80@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Biz ijtimoiy tarmoqlarda</h3>
          <div className="social-icons">
            {/* <a href="#"><img src="/assets/telegram.svg" alt="Telegram" /></a> */}
            <a href="#">
              {/* <img src="../assets/facebook.svg" alt="Facebook" /> */}
            </a>
            {/* <a href="#"><img src="/assets/instagram.svg" alt="Instagram" /></a> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer__text">2025. Barcha huquqlar himoyalangan </p>
      </div>
    </footer>
  );
};

export default Footer;
