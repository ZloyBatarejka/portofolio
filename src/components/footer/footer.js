import React from "react";
import "./footer.css";
const Footer = () => (
  <footer className="footer">
    <div className="info">
      <p>
        <i className="fas fa-envelope"></i>
        <a href="zshon@yandex.ru">zshon@yandex.ru</a>
      </p>
      <p>
        <i className="fas fa-phone"></i>7-905-000-41-65
      </p>
      <p>
        <i className="fas fa-map-marker-alt"></i>Russia,Neftekams(+5GMT)
      </p>
    </div>
    <div className="links">
      <a
        className="iconLink"
        href="https://vk.com/id45323051"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-vk fa-2x"></i>
      </a>
      <a
        className="iconLink"
        href="https://t.me/zloyshon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-telegram-plane fa-2x"></i>
      </a>
      <a
        className="iconLink"
        href="https://github.com/ZloyBatarejka"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github-square fa-2x"></i>
      </a>
      <a
        className="iconLink"
        href="https://ru.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in fa-2x"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
