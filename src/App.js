import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect (() =>{
    // will only run when components loads
    auth.onAuthStateChanged(authUser => {
      console.log("the user is",  authUser);

      if(authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is just logged out
        dispatch({
          type: 'SET_USER',
          USER: null
        })
      }
    })
  }, [])
  return (
   
      <div className="App">
       <Router>
        <Routes>
          <Route  path='/'
           element={
            <>
            <Header />
            <Home />
            </>
           }
          />
          <Route path='/checkout'
           element={
            <>
            <Header />
            <CheckOut />
            </>
           }
          />
          <Route  path='/login'
           element={
            <>
            <Login />
            </>
           }
          />
          <Route  path='/payment'
           element={
            <>
            <Header />
            <Payment />
            </>
          }
          />
        </Routes>
     </Router>
      </div>
    
  );
}

export default App;
