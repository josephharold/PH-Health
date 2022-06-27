import React from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
const BacktoTop = (props)=>{
	const handleClick = ()=>{
		window.scrollTo({top:0, behavior:'smooth'})
	}
	return(
		<>
			{/* adjust sizing*/}
			{/* try to add feature such that button only displays if
			 window.body-x-axis === certain point */}
			<div className='fixed bottom-12 flex flex-row justify-end mx-12'>
				<div onClick={()=>handleClick()}>
					<BsFillArrowUpCircleFill size={40}></BsFillArrowUpCircleFill>
				</div>
			</div>
		</>
	)
}

export {BacktoTop}
