import React from 'react';



const Header = (props)=>{
	const style = {
		maxWidth: '400px'	
	}
	return(
		<>
			<h1>this page is {props.title}</h1>
			<img style={style} src="https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg" alt="" />
		</>
	)
}

export {Header};