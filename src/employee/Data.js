import React , {Component} from 'react';

const Data = ({onNameHandler,fnamevalue,lnamehandler,lnamevalue,addresshandler,addressvalue,user,onClickme}) =>{
	return(
		<div>
		First Name:<input type = 'text' value = {fnamevalue} onChange={onNameHandler} /><br/>
		Last Name:<input type = 'text' value = {lnamevalue} onChange={lnamehandler} /><br/>
		Address: <input type = 'text' value = {addressvalue} onChange={addresshandler} /><br/><br/>
		<button onClick={onClickme}> Click me </button>
		{
			user.map((name, index) =>(
				<p> {index+1}. {name.firstName}	{name.lastName}  {name.address}</p>)
				)
		}
		</div>
		)
}
export default Data;