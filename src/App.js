import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Home from './components/home/Home';
import 'antd/dist/antd.css';

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
