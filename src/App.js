import React from 'react';
import Navigation from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
