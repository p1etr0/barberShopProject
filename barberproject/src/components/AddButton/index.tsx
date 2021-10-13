import React from "react"
import './style.css'

export const AddButton = () => {
   
  return(
    <div className="Button">
      <div className="image">➕</div>
      <input
        id="inputappointment"
        className="inputappointment"
        placeholder="Cadastre novo agendamento">
      </input>
    </div>
  );

}