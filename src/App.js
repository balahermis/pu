import Action from './pages/Action';
import './App.css';
import {
  BrowserRouter as Router,
  Route,Switch

} from 'react-router-dom';
import CustDetails from './pages/CustDetails';




function App() {
  return (     
         <Router>
          <Switch>
          <Route exact path="/" component={Action}/>
         <Route path="/CustDetails" component={CustDetails}/>
          </Switch>

     
          </Router>
        
  );
}

export default App;
