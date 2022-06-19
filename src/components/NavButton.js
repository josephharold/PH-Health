import React from 'react';


const NavButton = (props)=>{
	return(
		<div onClick={props.handleClick}>{props.title}</div>
	)
}

export {NavButton};