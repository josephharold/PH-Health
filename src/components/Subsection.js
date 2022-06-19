import React from 'react';


const Subsection = (props)=>{
	return(
		<>
			<h1>{props.subtitle}</h1>
			<div>{props.body}</div>
		</>
		
	)
}
export {Subsection};