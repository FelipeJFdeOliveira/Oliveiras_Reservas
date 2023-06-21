import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {

  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const email = urlParams.get('email');

    try {
      const response = await axios.post('http://localhost:8800/api/users/changePassword', { token, newPassword, email });

      setMessage(response.data.mensagem);
    } catch (error) {
    
      console.error(error);
      setMessage('Erro ao redefinir a senha.');
    }
  };

  return (
    <div>
      <h2>Redefinir Senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Nova Senha"
        />
        <button type="submit">Redefinir Senha</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;