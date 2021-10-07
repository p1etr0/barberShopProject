import React, {useState} from 'react';
import axios from "axios";
import './Register.css';


interface IBarber {
  nome: string;
  email: string;
  dtnasc: string;
  senha: string;
}

const baseURL = "http://localhost:3333/barber";

export function Register() {
  const [post, setPost] = useState<IBarber>();


  async function createPost() {
    



    // await axios.post(baseURL, post)
    //   .then((response) => {
    //     setPost(response.data);
    //   });
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
                placeholder="DIGITE SEU NOME">
              </input>
            </span>
            <span className="email">
              E-mail
              <input
                id="email"
                className="input"
                placeholder="DIGITE SEU E-MAIL">
              </input>
            </span>
            <hr></hr>
            <span className="dtnasc">
              Data de Nascimento
              <input
                id="dtnasc"
                className="input"
                placeholder="XX-XX-XXXX">
              </input>
            </span>
            <span className="senha">
              Senha
              <input
                id="senha"
                className="input"
                placeholder="XXXXXXXX">
              </input>
            </span>
            <button 
              className = "cadastrar"
              onClick={createPost}
            >
              Cadastrar
            </button>
          </form>
        </h3>
      </body>
    </div>
  );
}

export default Register;
