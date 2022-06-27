import React from 'react';


const Menu = (props)=>{
	let className="";
	// if active ? highlight color: !highlight color 
	// add hover
	props.isActive === true ? 
		className = "hover:scale-110 ease-in duration-100 cursor-pointer py-2 mx-10 bg-green-50 px-20 rounded-lg sm:mx-1 sm: px-1 xs:mx-1 xs: px-1"  		
		: className ="hover:scale-110 ease-in duration-100 cursor-pointer py-2 mx-10 px-20 rounded-lg sm:mx-1 sm: px-1 xs:mx-1 xs: px-1"
	return(
		<div className={className} onClick={props.handleClick}><p>{props.title}</p></div>
	)
}

export {Menu};