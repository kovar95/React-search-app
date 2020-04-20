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
		const {searchedTerm} = this.state;
		onDataSearch(searchedTerm);
	}

	addValue(event) {
		this.setState({
			searchedTerm : event.target.value,
		})
	}

	render() {
		const {searchedTerm} = this.state;
		const {openForm} = this.props;
		return(
			<section  className="search" >
				<input type="text" 
					   value={searchedTerm}
					   placeholder="Search" 
					   name="Search" 
					   onChange={ e => this.addValue(e)} 
				/>
				<button className="add" onClick={() => openForm()}>Add Player</button>
			</section>
		)
	}
}

export {Search};