import React, { useState } from 'react';
import '../styles/loginModal.css';

const LoginModal = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Логин: ${email}, Пароль: ${password}`);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Вход</h2>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <button onClick={handleLogin}>Войти</button>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default LoginModal;