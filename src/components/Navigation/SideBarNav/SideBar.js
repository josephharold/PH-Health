import React, {useState} from 'react';
import { HamBurgMenu } from './HamburgerMenu';
import { Menu } from './SideBarMenu';

const SideBar = (props)=>{
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = ()=>{
		console.log("hamburger is Clicked")
		isOpen === true ? setIsOpen(false): setIsOpen(true);
	}

	let options = props.menu.map(e=>{
		return <Menu
			handleClick = {()=>props.handleActive(e)}
			title = {e}
			isActive={props.active === e}	
		/>
	})	

	return(
		<>
			<div className="flex flex-row px-14 md:justify-center justify-start">
				<div className="block py-2 cursor-pointer md:hidden">
					<div onClick = {()=>toggleOpen()}>
						<HamBurgMenu/>
					</div>
					<div className={isOpen===true? "block": "hidden"}>
						{options}
					</div>
				</div>
			</div>
		</>
	)
}

export {SideBar};