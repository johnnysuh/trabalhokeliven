import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function Cadastro() {
  const [formulario, setFormulario] = useState(
    { nome: '', email: '', senha:'', confirmarSenha:'' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
  const handleChange = (e) => setFormulario(
    {...formulario, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
      e.preventDefault()
      if(formulario.senha !== formulario.confirmarSenha){
        setError('Senhas estão diferentes')
        return
      }

      try{
        await axios.post('https://localhost:3000/register', {
          usuario: formulario.nome,
          email: formulario.email,
          senha: formulario.senha,
        })
        navigate('/')
      }catch(err){
        setError(err.response.data || 'erro ao cadastrar')
      }
    }

  return (
    <div className="signup-container">
      <h2>Cadastrar-se no FIFA Campeonato</h2>
      <form onSubmit= {handleSubmit}>
        <input type="text" name="nome" placeholder="Nome completo" onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <input type="password" name="confirmarSenha" placeholder="Confirmar senha" onChange={handleChange} required />
        {error && <p className='error'>{error}</p>}
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <Link to="/">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
