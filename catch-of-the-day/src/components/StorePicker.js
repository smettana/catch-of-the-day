import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

	goToStore(e){
		e.preventDefault();
		console.log('test');		
	}

	render(){
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a Store</h2>
				<input type="text" placeholder="Store Name" defaultValue={getFunName()}
					ref
				/>
				<button type="submit">Visit Store</button>			
			</form>
		);
	}
}

export default StorePicker;