import React, {useState}from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
 const navigate = useNavigate();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const signIn = e => {
  e.preventDefault();
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // if signIn match the navigate to the home page
    
    if(auth){
      navigate('/')
    }
    const user = userCredential.user;
    
  })
  .catch((error) => {
     alert(error.message)
    const errorMessage = error.message;
  });
 }

 const register = e => {
  e.preventDefault ();
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   // if create up match the navigate to the home page

    console.log(userCredential)
    if(auth){
      navigate('/')
    }
    const user = userCredential.user;
  })
   .catch((error) => 
  alert(error.message)
  );
 }

  return (
    <div className='login'>
      <Link to="/">
      <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='logo-login' />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

          <p>
            By signing-in you agree to AMAZON CLONE Conditon of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          
          <button onClick={register} className='login__registerButton'>
            Create your Amazon Account
          </button>

      </div>
    </div>
    

  )
}

export default Login