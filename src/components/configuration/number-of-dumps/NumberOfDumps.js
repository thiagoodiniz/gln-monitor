import React, { Component } from 'react';
import { SliderController } from '../slider-controller/SliderController';

export class NumberOfDumps extends Component {

    state = {
		title: 'Number of Dumps',
		subtitle: 'Status',
        amountTitle: 'Amount',
		sliders: [
			{
				title: 'Red',
				statusColor: 'red',
				value: 4,
				maxValue: 8,
				minValue: 0,
				onChange: (newValue) => this.onChangeSlider(newValue)
			}
		],
	}

	onChangeSlider = (newValue) => {
		const sliders = this.state.sliders;
		sliders[0].value = newValue;
		this.setState({ sliders });
	}
	
	setDumps = (value) => {
		this.setState({numberOfDumps: value});
	}

	render() {
		return (
			<SliderController 
				title={ this.state.title }
				subtitle={ this.state.subtitle }
				amountTitle= { this.state.amountTitle }
				sliders= { this.state.sliders }
			/>
		);
	}
}