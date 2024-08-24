import React, { useState } from 'react';
import '../styles/registermodal.css';

const RegisterModal = ({ show, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const newUser = { username, email, password };

    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Регистрация успешна');
          onClose(); 
        } else {
          alert('Ошибка регистрации');
        }
      })
      .catch(error => console.error('Ошибка:', error));
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Регистрация</h2>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Имя пользователя"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        
        <button onClick={handleRegister}>Зарегистрироваться</button>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default RegisterModal;