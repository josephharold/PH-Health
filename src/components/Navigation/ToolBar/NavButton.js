import React from 'react';


const NavButton = (props)=>{
	let className="";
	props.isActive === true ? 
		className = "text-center cursor-pointer mx-5 bg-green-50 px-5 lg:py-5 rounded-t-lg"  		
		: className ="text-center cursor-pointer mx-5 px-5 lg:py-5 rounded-t-lg"
	return(
		<div className={className} onClick={props.handleClick}><p>{props.title}</p></div>
	)
}

export {NavButton};