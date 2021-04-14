import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../services/UserService';
import { getAccessToken } from '../store/AccessTokenStore';

const { createContext } = require("react");

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null) // Substitutes res.locals = currentUser

    const doLogin = () => { // This function handles the request to the DB to get the user data
        return getUserInfo() // We add return so we can use .then() right after doLogin() on Login.jsx file (onSubmit)
          .then(response => {
            setUser(response) // We get the user from the DB into the state but it'll be reset if the page is refreshed
          })
      } 
    
      useEffect(() => { // We'll use useEffect() to persist the user into the state even if the page is refreshed
        if (getAccessToken()) {
          doLogin() // If an access token exists we simply call getUser
        }
      }, []) // It will be updated only once, when it's sent from the DB

    // We need to export the value to be used in login
    const value = {
        doLogin, // Used to retrieve user info from the API
        user // So the user is accessible from current state
    }
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}