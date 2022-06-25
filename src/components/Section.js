import React from 'react';
import { Subsection } from './Subsection';
import { generateKey } from './Random';

const Section = (props)=>{	

	let subSections = props.subSections.filter(index=>{
		return index.page === props.page
	})
	subSections = subSections[0]
	console.log(subSections)

	let section = subSections.subSections.map(elem=>{
		return <Subsection
		  			subtitle = {elem.subtitle}
					body = {elem.body}
					key = {generateKey}
				/>
	})
	return(
		<div className="flex flex-col py-12 bg-green-5src\assets\vectorstock_28462917.png0">
			<h1>{props.title}</h1>
			{section}
		</div>
	)
}

export {Section};