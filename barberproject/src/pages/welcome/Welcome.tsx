import React, { useState, useEffect } from 'react';
import './Welcome.css';
import axios from 'axios'

interface IBarber  {
  nome: string, 
  email: string, 
  dtnasc: string,
}


export function Welcome() {

  const api = "http://localhost:3333/barber"

  const [barber, setNewBarber] = useState<IBarber>();
  
  useEffect(() => {
    axios.get(api).then((response) => {

      const ultimo = Object.keys(response.data).length-1
      
      setNewBarber(response.data[ultimo]);
    });
  }, []);
  
  
  

  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <h3>
          Bem vindo {barber?.nome}
        </h3>
        <p>Estamos carregando seus agendamentos ⏳</p>
        {() => {}}
      </header>
    </div>
  );
}

export default Welcome;
