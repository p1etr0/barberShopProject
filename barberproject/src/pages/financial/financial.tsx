import './financial.css';

export function Financial() {
  const entradas = [
    {descricao: 'sdasda', valor: 20, barber: 'sadasd'},
    {descricao: 'dasdsa', valor: 60, barber: 'dsads'},
  ];

  function soma(){
    let soma = 0;
    entradas.map((entrada) => {
      soma += entrada.valor
    })
    return soma
  }

  return (
    <div className="Financial">
      <body className="Financial-body">
        <h2>Entradas</h2>
        <div className="Financial-item"><b>Descricao</b>  |  <b>Valor</b>  |  <b>Responsável</b></div>
          {entradas.map((entradas) => (
            <div className="Financial-item">{entradas.valor}</div>
          ))}
        
          <div className="soma">
            Total Entradas: {soma()}

          </div>
      </body>
    </div>
  );
}

export default Financial;
