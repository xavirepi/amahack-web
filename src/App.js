import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/home/Home';
import Login from './components/auth/login';
import Navbar from './components/nav/Navbar';

function App() {
  // We create the user login management at App.js because it's the "highest point" (It'll be modified using context)
  const [user, setUser] = useState(null) // Substitutes res.locals = currentUser

  const getUser = () => { // This function handles the request to the DB to get the user data
    
  } 

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
