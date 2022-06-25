import React from 'react';


const NavButton = (props)=>{
	let className="";
	props.isActive === true ? 
		className = "cursor-pointer py-2 mx-10 bg-green-50 px-12 rounded-t-lg sm:mx-1 sm: px-1 xs:mx-1 xs: px-1"  		
		: className ="cursor-pointer py-2 mx-10 px-12 rounded-t-lg sm:mx-1 sm: px-1 xs:mx-1 xs: px-1"
	return(
		<div className={className} onClick={props.handleClick}><p>{props.title}</p></div>
	)
}

export {NavButton};