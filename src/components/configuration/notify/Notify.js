import React, { Component } from 'react';
import './Notify.scss';
import { Input, Button } from "antd";
import { List } from '../list/List';

class Notify extends Component {

	state ={ 
		email: '',
		phoneNumber: '',
		contactList: [],
	}

	handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
	}
	
	onAddContactClick = () => {
		this.state.contactList.push({
			email: this.state.email,
			phoneNumber: this.state.phoneNumber,
		});

		this.setState({
			...this.state,
			email: '',
			phoneNumber: '',
		});
	}

	removeContact = (index) => {
		this.state.contactList.splice(index, 1);
		this.setState(this.state);
	}

	render() {
		return(
			<div className="notify">
				<h5 className="notify__title">Notify</h5>
				<form className="notify__form">
					<div className="notify__form--item">
						<span>Mail:</span>
						<Input 
							name="email" 
							onChange={ this.handleChange } 
							value={ this.state.email } 
							placeholder="Type an e-mail"
						/>
					</div>
					<div className="notify__form--item">
						<span>SMS:</span>
						<Input 
							name="phoneNumber" 
							onChange={ this.handleChange } 
							value={ this.state.phoneNumber } 
							placeholder="Type a phone number"
						/>
					</div>
	
					<Button 
						className="notify__form--add-btn"
						onClick={ this.onAddContactClick }
						disabled={ !this.state.email || !this.state.phoneNumber }
						type="primary"
					>Add
					</Button>
				</form>

				<List itemList={ this.state.contactList } onRemoveItem={ this.removeContact } />
				
			</div>
		); 
	}

}

export default Notify;