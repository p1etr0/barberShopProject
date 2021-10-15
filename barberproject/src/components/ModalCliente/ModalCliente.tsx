import React, { useState, useEffect } from 'react';
import './ModalCliente.css';
import axios from 'axios'



export function ModalCliente() {

  const api = "http://localhost:3333/barber"

  
  useEffect(() => {
    axios.get(api).then((response) => {

      
    });
  }, []);
  
  
  

  return (
    <div className="ModalCliente">
      
    </div>
  );
}

export default ModalCliente;
