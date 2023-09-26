// import { Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   
      <div className="App">
       <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/checkout' element={<CheckOut />}/>
        </Routes>
     </Router>
      </div>
    
  );
}

export default App;
