import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';

import NavBar from './components/navbar'
import Home from './components/home'
import Pokemon from './components/pokemon';
import MyTeam from './components/myteam';


function App() {
  return (
    <Router>
    <NavBar />
     <Switch>
       <Route 
            exact
            path="/"
            component={Home}
       />

       <Route 
          exact
          path="/pokemon/:pokemonName"
          component={Pokemon}
       />
        <Route 
          exact
          path="/myteam"
          component={MyTeam}
       />

     </Switch>
    </Router>
  );
}

export default App;
