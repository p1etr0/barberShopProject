import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import './Register.css';


const baseURL = "http://localhost:3333/barber/";

export function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dtnasc, setDtnasc] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();


  async function handleSubmitForm() {
    
    await axios.post(baseURL, {
      nome,
      email,
      dtnasc,
      senha,
    }).then((response) => {
      history.push("/");
    });
    
  }

  return (
    <div className="Register">
      <body className="Register-body">
        <h3>
          <form className="formRegister">
            <h2>Cadastro</h2><hr></hr>
            <span className="name">
              Nome Completo
              <input
                id="inputname"
                className="input"
                onChange={e => setNome(e.target.value)}
                placeholder="DIGITE SEU NOME">
              </input>
            </span>
            <span className="email">
              E-mail
              <input
                id="email"
                className="input"
                onChange={e => setEmail(e.target.value)}
                placeholder="DIGITE SEU E-MAIL">
              </input>
            </span>
            <hr></hr>
            <span className="dtnasc">
              Data de Nascimento
              <input
                id="dtnasc"
                className="input"
                onChange={e => setDtnasc(e.target.value)}
                placeholder="XX-XX-XXXX">
              </input>
            </span>
            <span className="senha">
              Senha
              <input
                name="senha"
                id="senha"
                className="input"
                onChange={e => setSenha(e.target.value)}
                placeholder="XXXXXXXX">
              </input>
            </span>
            <button 
              type = "button"
              className = "cadastrar"
              onClick={handleSubmitForm}
            >
              Cadastrar
            </button>
          </form>
        </h3>
      </body>
    </div>
  );
}

