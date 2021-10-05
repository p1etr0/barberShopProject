import React from "react";
import axios from 'axios'

function Axios(){
  const api = axios.create({
    baseURL: "http://localhost:3333/"
  })
  
  console.log(api);
  

  return(
    <div></div>
  )
}