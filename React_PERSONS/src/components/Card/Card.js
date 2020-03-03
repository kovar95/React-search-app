import React, {Component} from 'react';
import './Card.scss';

class Card extends Component{

	render() {
		return (
			<div className="card">
				<span>Name: {this.props.name} </span>
				<span>Last name: {this.props.lastName} </span>
				<span>Age: {this.props.age} </span>
			</div>
		)
	}
}

export {Card};