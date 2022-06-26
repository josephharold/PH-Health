import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { IconContext } from "react-icons";
const HamBurgMenu =(props)=>{
	return(
		<>
			<GiHamburgerMenu value={{className: "w-3/4"}}/>
		</>
	)
}

export {HamBurgMenu};