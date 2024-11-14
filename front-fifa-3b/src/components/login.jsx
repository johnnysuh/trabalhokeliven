// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  
  return (
    <div className="login-container">
      <h2>Login no FIFA Campeonato</h2>
      <form >
        <input type="email" name="email" placeholder="E-mail" required />
        <input type="password" name="senha" placeholder="Senha" required />
        
        <button type="submit">Acessar</button>
      </form>
      <p>
        Não possui cadastro? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;
