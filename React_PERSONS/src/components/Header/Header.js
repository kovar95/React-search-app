import React, {Component} from 'react';
import './Header.scss';
import {Search} from '../Search/Search';
import {Logo} from '../Logo/Logo';

class Header extends Component{

	render() {
		return (
			<header>
				<div className="main-wrapper">
					<Logo/>
					<Search onDataSearch={this.props.getSearched} />
				</div>
			</header>
		)
	}
}

export {Header};