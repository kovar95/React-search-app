import React, {Component} from 'react';
import './Cards.scss';
import {Card} from '../Card/Card';
import uuid from 'react-uuid';

class Cards extends Component{

	render() {
		return (
			<div className="cards">
			{this.props.players.map( element => <Card 
													key={uuid()}
													name={element.name}
													lastName={element.lastName}
													age={element.age}
												/>
									)
			}
			</div>
		)
	}
}

export {Cards};