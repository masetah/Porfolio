import React from 'react';
import Navigation from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Sidebar/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
