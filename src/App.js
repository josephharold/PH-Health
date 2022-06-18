import React, { useState, useEffect } from 'react';
import { NavBar } from './components.js/Navbar';
import { Section } from './components.js/Section';
import { sections as sec} from './sections';

function App() {
  const [active, setActive] = useState('Home');
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
      <Section
        subSections={sec}
        page= {active}
      /> 
    </>
  );
}

export default App;
