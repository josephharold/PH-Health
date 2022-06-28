import React from 'react';
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
		<div className="hidden md:flex flex-row px-14 md:justify-center justify-start">
			{/* <div className="hidden md:flex md:flex-row md:justify-center"> */}
				{menu}
			{/* </div> */}
		</div>
		</>	
	)
}

export {NavBar};