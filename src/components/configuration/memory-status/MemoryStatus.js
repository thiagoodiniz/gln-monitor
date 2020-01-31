import React, { Component } from 'react';
import { SliderController } from '../slider-controller/SliderController';

export class MemoryStatus extends Component {

	greenSlider = 30;
	yellowSlider = 0;
	redSlider = 20;

    state = {
		title: 'Status',
        amountTitle: 'Amount Mb',
		sliders: [],
	}

	componentDidMount = () => {
		this.setState({ sliders: this.getSliders() });
	}

	getSliders = () => {
		return [
			{
				title: 'OK',
				statusColor: 'green',
				value: this.greenSlider,
				onChange: (newValue) => this.onChangeSlider('greenSlider', newValue)
			},
			{
				title: 'Yellow',
				statusColor: 'yellow',
				value: this.yellowSlider,
				marks: {
					[this.greenSlider]: {	
						style: {
							border: '1px dashed #52C41A',
							width: '1px',
							height: '9px',
							position: 'relative',
							top: '-18px',
						},
						label: ' '
					}
				},
				onChange: (newValue) => this.onChangeSlider('yellowSlider', newValue)
			},
			{
				title: 'Red',
				statusColor: 'red',
				value: this.redSlider,
				marks: {
					[this.yellowSlider]: {
						style: {
							border: '1px dashed #FF9E00',
							width: '1px',
							height: '9px',
							position: 'relative',
							top: '-18px',
						},
						label: ' '
					}
				},
				onChange: (newValue) => this.onChangeSlider('redSlider', newValue)
	
			}
		];
	}
	onChangeSlider = (sliderChanged, newValue) => {
		if(!newValue) newValue = 0;

		this[sliderChanged] = parseInt(newValue);		
		this.setState({ sliders: this.getSliders() });
	}

	render() {
		return (
			<SliderController 
				title={ this.state.title }
				amountTitle= { this.state.amountTitle }
				sliders= { this.state.sliders }
			/>
		);
	}
}