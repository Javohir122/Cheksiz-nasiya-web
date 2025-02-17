import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Invistitsiya xizmatlarimiz orqali daromadingizni 40% oshadi!</h1>
      <p className="header-text">Siz ham nasiya tizimidan foydalaning!</p>
      <button className="header-button">Hozirda boshlang</button>
    </div>
  );
};

export default Header;
