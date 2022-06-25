import React, {useState, useEffect} from 'react';
import { NavButton } from './NavButton';
// import JSON file here
// to add on media screen change
const NavBar =(props)=>{
	let menu = props.menu.map(e=>{
		return <NavButton
		  			handleClick = {()=>props.handleActive(e)}
						title = {e}
						isActive={props.active === e}
				/>
	})
	return(
		<>
		<div className="flex flex-row px-5 justify-center">
			{menu}
		</div>
		</>	
	)
}

export {NavBar};