import React, {Component} from 'react';
import './Search.scss'


class Search extends Component {

	state = {
		searchedTerm : '',
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.searchedTerm !== this.state.searchedTerm) {
			return true
		}
		return false
	}

	componentDidUpdate(){
		const {onDataSearch} = this.props;
		onDataSearch(this.state.searchedTerm);
	}

	addValue(event) {

		this.setState({
			searchedTerm : event.target.value,
		})
	}

	render() {
		return(
			<section  className="search" >
				<input type="text" 
					   value={this.state.searchedTerm}
					   placeholder="Search" 
					   name="Search" 
					   onChange={(e) => this.addValue(e)} 
				/>
			</section>
		)
	}
}

export {Search};