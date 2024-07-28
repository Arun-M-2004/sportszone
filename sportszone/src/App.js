import React from 'react';
import './App.css';
import Home from './Pages/Home'
import SignUp from './Pages/Signup';
import SignInSide from './Pages/SignInSide';
import Tournaments from './Pages/Tournaments';
import Organizerdash from './Pages/Orgainzerdash';
import Schedule from './Pages/Schedule.js';
import './css/globalstyles.css';
import AboutUs from './Pages/Aboutus';
import Teams from './Pages/Teams'
import Contact from './Pages/Contact ';
import Checkout from './Pages/payment/Checkout';


function App() {

  return (
    <div className="App">
      <header className="App-header">

        {/* <Home/> */}
        {/* <SignInSide/> */}
        {/* <Tournaments/> */}
       {/* <SignUp/> */}
     {/* <Organizerdash/> */}
       {/* <Organizerdash/> */}
  
     <Schedule/>     
       {/* <AboutUs/>  */}
       {/* <Teams/> */}
       {/* <Contact/> */}
       {/* <Checkout/> */}
      </header>
    </div>
  
  );
}

export default App;
