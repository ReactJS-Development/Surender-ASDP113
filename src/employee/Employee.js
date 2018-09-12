import React , { Component } from 'react';
import Data from './Data';
class Employee extends Component{
	
		constructor(props){
		super(props);
		this.state={user:[
							{
						    "firstName": "Amit",
						    "lastName": "Kumar",
						    "address": "Boston"
						  	},
						  	{
						    "firstName": "Srender",
						    "lastName": "Sharma",
						    "address": "Hisar"
						  	},
						  	{
						    "firstName": "Mukul",
						    "lastName": "Sharma",
						    "address": "Hisar"
						 	 }
						]				  				
					};
				}

	onChangeFnameHandler = (event) => {
		this.setState({firstName :event.target.value});
	};
	onchangelnamehandler=(event)=>{
		this.setState({lastName:event.target.value});
	};
	onchangeaddresshandler=(event)=>{
		this.setState({address:event.target.value});
	};
	onClickme=()=>{
		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const address = this.state.address;
		const newUser = this.state.user.concat({ firstName, lastName, address});
		this.setState({user : newUser, firstName: "", lastName : "",  address : "" });

		/*this.state.user.push([this.state.firstName,this.state.lastName,this.state.address]);
		alert('A name was submitted: ' + this.state.firstName +this.state.lastName +this.state.address); */
	}

	render(){
		return(
			<div>
				This is user data.
				<Data user={this.state.user} onNameHandler={this.onChangeFnameHandler} fnamevalue={this.state.firstName}	lnamehandler={this.onchangelnamehandler} lnamevalue={this.state.lastName} addresshandler={this.onchangeaddresshandler} addressvalue={this.state.address} onClickme={this.onClickme}/>
			</div>
			);}
}
export default Employee;