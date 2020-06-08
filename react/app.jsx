import React from 'react';
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			contador: 0,
		}
	}
	somarContador(valor){
		this.setState({
			contador: this.state.contador + valor,
		})
	}
	render(){
		const peoples = [
			{name: 'Michael'},
			{name: 'Ryan'},
			{name: 'Tyler'}
		];
		return (
			<ol>
				{peoples.map(
					people => (
						<li key={people.name}>{people.name}</li>
					)
				)}
			</ol>
		);
	}
}
export default App;