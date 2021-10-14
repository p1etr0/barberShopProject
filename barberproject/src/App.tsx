import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Welcome} from './pages/welcome/Welcome'
import {Login} from './pages/login/Login'
import {Register} from './pages/register/Register'
import {Financial} from './pages/financial/financial'
import {Appointments} from './pages/appointment/appointments'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Barber Shop"
  }, []);
  

  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/cadastrobarber" exact component={Register}/>
          <Route path="/eventos" exact component={Appointments}/>
          <Route path="/financeiro" exact component={Financial}/>
          <Route path="/bemvindo" component={Welcome}/>
          {/* <Route path="/admin/rooms/:id" component={AdminRoom}/> */}
        </Switch>
    </Router>
  );
}

export default App;


