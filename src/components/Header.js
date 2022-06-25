import React from 'react';
import logo from '../assets/logo.png' ;


const Header = (props)=>{
	const style = {
		maxWidth: '400px'	
	}
	return(
		<>
		{/* to add onScroll event */}
		<div className="flex flex-row justify-center py-10">
			<img className="w-44" src={logo} alt="this logo" />
		</div>
		</>
	)
}

export {Header};