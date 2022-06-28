import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
const HamBurgMenu =(props)=>{
	return(
		<div className='hover:scale-125 ease-in duration-100'>
			<GiHamburgerMenu size={35}/>
		</div>
	)
}

export {HamBurgMenu};