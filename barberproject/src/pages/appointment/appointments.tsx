import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import 'react-calendar/dist/Calendar.css';
import './appointment.css'
import axios from 'axios';
import { useHistory } from 'react-router';

type IEvent  = {
  idcliente: string,
  idbarbeiro: string,
  idprocedimento: string,
}
type IProcedimentos  = {
  id: string,
  nome: string,
  duracao: string,
  valor: string,
}

type IClientes = {
  nome: string,
  cpf: string,
  dtnasc: string,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const baseURLCliente = "http://localhost:3333/clientes/";
const baseURLEventos = "http://localhost:3333/eventos/";
const baseURLProcedimentos = "http://localhost:3333/procedimentos/";


export function Appointments(){
  
  const [events, setEvents] = useState<IEvent[]>();
  const [procedimentos, setProcedimentos] = useState<IProcedimentos[]>();
  const [clientes, setClientes] = useState<IClientes[]>();
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [dtnasc, setDtnasc] = useState('');
  const [horario, setHorario] = useState('');
  const [date, newDate] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  

  async function handleSubmitCliente() {
    await axios.post(baseURLCliente, {
      nome,
      cpf,
      dtnasc,
    }).then((response) => {
      closeModal()
    });
  }

  
  

  useEffect(() => {
    axios.get(baseURLEventos).then((response) => {
      
      setEvents(response.data)
    });

    axios.get(baseURLProcedimentos).then((response) => {
      
      setProcedimentos(response.data)
    });
    
    axios.get(baseURLCliente).then((response) => {
      
      setClientes(response.data)
    });
  }, [])
  

  return(
    <div className="Appointments">
      <body className="Appointments-body">
       <h3>Agenda - Pietro</h3>
       <div className="cadastro">
        <select className="input-cliente" id="input-cliente">
          {clientes?.map((cliente) => (
            <option className="option-proc">{cliente.nome}</option>
          ))}
        </select>
        <select className="selecao-proc" id="procedimentos">
          {procedimentos?.map((procedimento) => (
            <option className="option-proc">{procedimento.nome} | R$ {procedimento.valor}.00</option>
          ))}
        </select>
        <select className="selecao-horarios" id="horarios" onChange={e => setHorario(e.target.value)}>
          <option className="option-event">16/10/2021</option>
          <option className="option-event">17/10/2021</option>
          <option className="option-event">18/10/2021</option>
        </select>
        <button className="button-cadevento" >Inserir</button>
        <button className="button-cadevento" onClick={openModal} >Cadastrar Cliente</button>
        <button className="button-movimentacao" onClick={() => {history.push('./financeiro')}} >Financeiro</button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <h2>Cadastrar Cliente</h2>
          <form className="form-modal">
            <input className="input-modal" 
            placeholder="Nome"
            onChange={e => setNome(e.target.value)}
            ></input>
            <input className="input-modal" 
            placeholder="Data de Nascimento"
            onChange={e => setDtnasc(e.target.value)}
            ></input>
            <input className="input-modal" 
            placeholder="CPF"
            onChange={e => setCPF(e.target.value)}
            ></input>
            <button className="button-cadastrar-cliente" onClick={handleSubmitCliente}>Cadastrar</button>
            <button onClick={closeModal} className="button-fechar">Fechar</button>
          </form>
        </Modal>
       </div>
       <div className="hoje">
         <h3>{date.toLocaleDateString('pt-br')}</h3>
       </div>
       <div className="List">
         <div className="Appointments">
         <div className="Appointment-item"> <b>Cliente</b>  |  <b>Procedimento</b></div>
            {events?.map((event) => (
              <div className="Appointment-item"> {event.idcliente} | {event.idprocedimento} </div>
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

