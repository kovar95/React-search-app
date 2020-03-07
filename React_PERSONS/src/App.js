import React, {Component, Fragment} from 'react';
import './App.scss';



import {Cards} from './components/Cards/Cards';
import {Form} from './components/Form/Form';
import {Header} from './components/Header/Header';

class App extends Component {

	state = {
		filteredData: [],
		playersData :[
			{
				name : "Ronaldinho",
				lastName : "Gaucho",
				age: 27
			},
			{
				name : "Cristiano",
				lastName : "Ronaldo",
				age: 34
			},
			{
				name : "Carlos",
				lastName : "Tevez",
				age: 35
			},
			{
				name : "Branislav",
				lastName : "Ivanovic",
				age: 35
			},
			{
				name : "Petr",
				lastName : "Cech",
				age: 37
			},
			{
				name : "Lionel",
				lastName : "Messi",
				age: 32
			},
			{
				name : "Gerard",
				lastName : "Pique",
				age: 32
			},
			{
				name : "Michael",
				lastName : "Ballack",
				age: 43
			},
			{
				name : "Vladimir",
				lastName : "Stojkovic",
				age: 36
			},
			{
				name : "Pablo",
				lastName : "Zabaleta",
				age: 34
			},
			{
				name : "Pol",
				lastName : "Pogba",
				age: 26
			},
			{
				name : "Pierre",
				lastName : "Aubameyang",
				age: 30
			},
			{
				name : "Antoane",
				lastName : "Griezmann",
				age: 28
			},
			{
				name : "Olivier",
				lastName : "Giroud",
				age: 33
			},
			{
				name : "Eden",
				lastName : "Hazard",
				age: 29
			}
		],
		form : false,
	}

	componentDidMount(){
		this.setState({
			filteredData: this.state.playersData,
		})
	}

	sholudComponentUpdate(nextProps, nextState) {
		if (nextState.form !== this.state.form && nextState.playersData.length !== this.state.playersData.length) {
			return true
		}
		return false
	}

	dataSearch(text) {
		const filteredData = this.state.playersData.filter( item => {
			return item.name.concat(item.lastName).toLowerCase().includes(text.toLowerCase().trim())
		})
	  	this.setState({
	  		filteredData : filteredData,
	  	})
	}

	openForm(){
		this.setState({
			form: true,
		})
	}

	addPlayer(somePlayer) {
		const newTeam = [...this.state.playersData];
		const {name, lastName, age} = somePlayer;
		console.log("Name: " + name + " Lastname: " + lastName + " Age: " + age);
		if (!(name && lastName && age)) {
			alert("All fields must be filled !!!");
			this.setState({
				form: true,
			})
		} else {
			newTeam.push(somePlayer);
			console.log(newTeam);
			this.setState({
				playersData: newTeam,
				filteredData: newTeam,
				form: false,
			})
		}
	}

	closeForm(value){
		this.setState({
			form:value,
		})
	}

	render() {
		return (
			<Fragment>
				<Header  getSearched={(text) => this.dataSearch(text)} />
				<Cards players={this.state.filteredData} />
				{this.state.form && <Form  addNewPlayer={ player => this.addPlayer(player)} closeForm={ (value) => this.closeForm(value)}/>}
				<button onClick={() => this.openForm()}>Add Player</button>
			</Fragment>
		)
	}
}

export default App;