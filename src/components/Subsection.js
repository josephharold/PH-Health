import React from 'react';
const Subsection = (props)=>{
	return(
		<div className="px-5 py-5 md:px-12 flex flex-col justify-center">
				<h1 className="pb-5 text-xl">{props.subtitle}</h1>
				<div className="leading-loose text-justify">{props.body}</div>
		</div>
	)
}
export {Subsection};