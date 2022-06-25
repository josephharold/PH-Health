import React from 'react';
const Subsection = (props)=>{
	return(
		<>
			<div className="mx-2 my-7 flex flex-row justify-center">
				<div className="grid grid-cols-1 grid-rows-2 w-3/4 xs:w-6/7">
					<h1 className="justify-self-center w-3/4 text-xl">{props.subtitle}</h1>
					<div className="leading-loose justify-self-center w-3/4 text-base">{props.body}</div>
				</div>
		</div>
		</>
	)
}
export {Subsection};