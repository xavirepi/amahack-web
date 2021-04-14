import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Navbar from './components/nav/Navbar';
import { getUserInfo } from './services/UserService';
import { getAccessToken } from './store/AccessTokenStore';
import Product from './components/product/Product';

function App() {
  // // We create the user login management at App.js because it's the "highest point" - modified using context
  // const [user, setUser] = useState(null) // Substitutes res.locals = currentUser

  // const getUser = () => { // This function handles the request to the DB to get the user data
  //   return getUserInfo() // We add return so we can use .then() right after doLogin() on Login.jsx file (onSubmit)
  //     .then(response => {
  //       setUser(response) // We get the user from the DB into the state but it'll be reset if the page is refreshed
  //     })
  // } 

  // useEffect(() => { // We'll use useEffect() to persist the user into the state even if the page is refreshed
  //   if (getAccessToken()) {
  //     getUser() // If an access token exists we simply call getUser
  //   }
  // }, []) // It will be updated only once, when it's sent from the DB

  return (
    // We add user as a prop to the Navbar to manage login/logout
    <div className="App">
      {/* <Navbar user={user} />  User prop is no longer needed since the creation of a context*/}
      <Navbar /> 

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" render={Product} />
        <Route exact path="/signin" component={Login} />
        {/* <Route exact path="/products/:id" render={(props) => <Product user={user}/>} /> User prop is no longer needed since the creation of a context*/} 
        {/* <Route exact path="/signin" render={() => <Login doLogin={getUser} />} /> User prop is no longer needed since the creation of a context*/}
      </Switch>
    </div>
  );
}

export default App;
