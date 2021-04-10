import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
