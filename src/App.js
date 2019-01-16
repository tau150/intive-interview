import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './modules/search/components/SearchBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<SearchBar />
				</div>
			</div>
		);
	}
}

export default App;
