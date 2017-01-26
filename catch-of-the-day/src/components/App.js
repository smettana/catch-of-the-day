import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{

	constructor(){
		super();

		this.state = {
			fishes : {},
			order : {}
		}
	}

	addFish(fish) {
		// update state
		const  fishes = {...this.state.fishes};
		// add in new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish; 
		// set state
		this.setState({
			fishes:fishes
		});

	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh see food market"/>
				</div>
				<Order/>
				<Inventory addFish={this.addFish.bind(this)}/>	
			</div>	
		);
	}
}

export default App;