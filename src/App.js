import React, { useState, useEffect } from 'react';
import { NavBar } from './components.js/Navbar';

function App() {
  const [active, setActive] = useState('About Us');
  const [pages, setPages] = useState([
    'About Us','Members','Our Partners', 'Online Services', 'Downloads'
  ]);

  const handleActive = (page)=>{
    setActive(page);
  }

  return (
    <>
      <h1></h1>
      <NavBar
        handleActive ={(page)=>handleActive(page)}
        menu = {pages}
      />
      <Section/> 
    </>
  );
}

export default App;
