import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  private api = axios.create({
    baseURL: "http://localhost:3333/"
  })

  state = {
    message: '',
  }

  async componentDidMount(){
    const response = await this.api.get("/");
    this.setState(response.data, () => {});
  }
  

  render(){
    const { message } = this.state;
    console.log(message);
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {message} teste
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
