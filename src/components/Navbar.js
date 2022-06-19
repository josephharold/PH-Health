import React, {useState, useEffect} from 'react';
import { NavButton } from './NavButton';
// import JSON file here
const NavBar =(props)=>{



	let menu = props.menu.map(e=>{
		return <NavButton
		  			handleClick = {()=>props.handleActive(e)}
					title = {e}
				/>
	})
	return(
		<>
		{menu}
		</>	
	)
}

export {NavBar};