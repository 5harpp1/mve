import React from 'react';
import '../styles/header.css';

const Header = ({ onLoginClick, onRegisterClick }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Магазин одежды </h1>  
      </div>
      <nav className="header__nav">
        <a href="/" className="header__nav-link">Главная</a>
        <a href="/cart" className="header__nav-link">Корзина</a>
        <a href="/profile" className="header__nav-link">Профиль</a>
      </nav>
      <div className="header__buttons">
        <button className="header__button" onClick={onLoginClick}>Войти</button>
        <button className="header__button header__button--register" onClick={onRegisterClick}>Регистрация</button>
      </div>
    </header>
  );
};

export default Header;