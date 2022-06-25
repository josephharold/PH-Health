import React, { useState, useEffect } from 'react';
import { NavBar } from './components/Navbar';
import { Section } from './components/Section';
import { sections as sec} from './section-contents/sections';
import { Header } from './components/Header'; 
import './index.css'
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
    <Header
      title = {active}
    />      
    <div className="flex flex-row mx-5 justify-center">
      <h1 className="">This is a header</h1>
    </div>
      <NavBar
        handleActive ={(page)=>handleActive(page)}
        menu = {pages}
        active={active}
      />
      <Section
        subSections={sec}
        page= {active}
      /> 
    </>
  );
}

export default App;
