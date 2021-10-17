import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './financial.css';

const baseURL = 'http://localhost:3333/entradas'

type IEntrada = [{
  descricao: string,
  valor: string,
  idbarber: string;
}]

export function Financial() {

  const [entradas, setEntradas] = useState<IEntrada>()
  const history = useHistory()

  function soma(){
    let soma = 0;
    entradas?.map((entrada) => {
      let valor = parseInt(entrada.valor)
      soma += valor
    })
    return soma
  }

 
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      
      setEntradas(response.data)
    })
  })
  
  
  return (
    <div className="Financial">
      <body className="Financial-body">
      <button className="button-movimentacao" onClick={() => {history.push('./eventos')}} >Eventos</button>
        <h2>Entradas</h2>
        <div className="Financial-item"><b>Descricao</b>  |  <b>Valor</b>  |  <b>Responsável</b></div>
        {entradas?.map((entrada) => (
          <div className="Financial-item">{entrada.descricao}  |  {entrada.valor}  |  {entrada.idbarber}</div>
        ))}
        
          <div className="soma">
            Total Entradas: {soma()}

          </div>
      </body>
    </div>
  );
}

export default Financial;
