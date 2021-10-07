import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Welcome} from './pages/welcome/Welcome'
import {Login} from './pages/login/Login'
import {Register} from './pages/register/Register'

function App() {

  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/cadastrobarber" exact component={Register}/>
          <Route path="/welcome" component={Welcome}/>
          {/* <Route path="/admin/rooms/:id" component={AdminRoom}/> */}
        </Switch>
    </Router>
  );
}

export default App;