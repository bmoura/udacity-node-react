import React, { Component } from 'react';
import './index.css';

class Contacts extends Component{
	render(){
		const peoples = this.props.names;
		return (
			<ol>
				{
					peoples.map(
						people => (
							<li key={people.name}>{people.name}</li>
						)
					)
				}
			</ol>
		);
	};
};

class Carros extends Component{
	render(){
		const marcas = [
			{name: 'Ford'},
			{name: 'Fiat'},
			{name: 'Hyundai'}
		];
		return (
			<ul>
				{
					marcas.map(
						marca => (
							<li key={marca.name}>{marca.name}</li>
						)
					)
				}
			</ul>
		);
	};
};

class App extends Component {
	render(){
		return (
			<div className="App">
				<header className="App-header">
					<img src="/icons/logo.svg" className="App-logo" alt="logo" />
					<h1 className="App-title">Hello Word</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Contacts
					names={[
						{name: 'Michael'},
						{name: 'Ryan'},
						{name: 'Tyler'}
					]}
				/>
				<Carros/>
				<Contacts
					names={[
						{name: 'Olá nenem'}
					]}
				/>
			</div>
		)
	};
};

export default App;
