
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';
import About from './pages/About';
import { Route, Switch,Redirect } from 'react-router-dom';
function App() {
  return (
    <Switch>
        <div className="App">
             <Route path="/detail/:idDetailItem" component={Detail} exact />
             <Route path="/home" component={Home} exact />
             <Route path="/about" component={About} exact />
             <Route path="/" component={Home} exact />
             <Route path="/Error" component={Error} exact />
             <Redirect to="/Error" component={Error} />
             
        </div>
    </Switch>
  );
}

export default App;
