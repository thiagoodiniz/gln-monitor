import React, { Component } from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import store from './store';
import Home from './components/home/Home';

class App extends Component {

	render() {
		return (
			<Provider store={ store }>
				<Home></Home>
			</Provider>
		);
	}
}

export default App;
