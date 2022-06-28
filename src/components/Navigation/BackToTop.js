import React from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
const BacktoTop = (props)=>{
	const handleClick = ()=>{
		window.scrollTo({top:0, behavior:'smooth'})
	}
	return(
		<>
			<div className='fixed bottom-12 flex flex-row justify-end mx-12'>
				<div className='hover:scale-125 ease-in duration-100 cursor-pointer' onClick={()=>handleClick()}>
					<BsFillArrowUpCircleFill size={35}></BsFillArrowUpCircleFill>
				</div>
			</div>
		</>
	)
}

export {BacktoTop}
