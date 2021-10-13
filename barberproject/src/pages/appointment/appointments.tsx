import React, { useState } from 'react'
import Calendar from 'react-calendar'


import 'react-calendar/dist/Calendar.css';
import './appointment.css'

type IList  = {
  id: number,
  nome: string,
  procedimento: string,
  valor: string
}

export function Appointments(){
  const [list, setList] = useState<IList[]>([
    {id: 1, nome: 'Teste 1', procedimento: 'Cabelo', valor: 'R$ 40,00'},
  ]);

  const [cliente, setCliente] = useState('');
  const [procedimento, setProcedimento] = useState('Cabelo | R$ 40,00');
  const [horario, setHorario] = useState('');
  const [date, newDate] = useState(new Date());

  function novoEvento (){
    if(cliente === '') return;
    
    let Evento = {
      id: list.slice(-1)[0].id + 1,
      nome: cliente,
      procedimento: procedimento.split("|")[0].trim(),
      valor: procedimento.split("|")[1].trim()
    }

    let newEventos = [...list, Evento]
    setList(newEventos)
  }

  

  return(
    <div className="Appointments">
      <body className="Appointments-body">
       <h3>Agenda - Pietro</h3>
       <div className="cadastro">
        <input className="input-cliente" 
          placeholder="Cliente"
          onChange={e => setCliente(e.target.value)}
        ></input>
        <select className="selecao-proc" id="procedimentos" onChange={e => setProcedimento(e.target.value)}>
          <option className="option-proc">Cabelo | R$ 40,00</option>
          <option className="option-proc">Barba | R$ 25,00</option>
          <option className="option-proc">Cabelo e Barba | R$ 60,00</option>
        </select>
        <select className="selecao-horarios" id="horarios" onChange={e => setHorario(e.target.value)}>
          <option className="option-event">16/10/2021</option>
          <option className="option-event">17/10/2021</option>
          <option className="option-event">18/10/2021</option>
        </select>
        <button className="button-cadevento" onClick={novoEvento}>Inserir</button>
       </div>
       <div className="hoje">
         <h2>{date.toLocaleDateString('pt-br')}</h2>
       </div>
       <div className="List">
         <div className="Appointments">
           
          {list.map((item, index) => (
            <div className="Appointment-item">({item.id}) - {item.nome} | {item.procedimento} | {item.valor}</div>
          ))}

         </div>
         <div className="Calendar">
          <Calendar 
            onChange={newDate}
            value={date}
          />
         </div>
       </div>
      </body>
    </div>
  )
}

