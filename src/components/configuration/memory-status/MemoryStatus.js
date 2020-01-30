import React, { Component } from 'react';
import { SliderController } from '../slider-controller/SliderController';

export class MemoryStatus extends Component {

    state = {
		title: 'Status',
        amountTitle: 'Amount Mb',
        greenSlider: 30,
		yellowSlider: 0,
		redSlider: 20,
		sliders: [],
	}

	componentDidMount = () => {
		this.setState({
			sliders: this.getSliders(),
		})
	}

	getSliders = () => {
		return [
			{
				title: 'OK',
				statusColor: 'green',
				value: this.state.greenSlider,
				onChange: (newValue) => this.onChangeSlider('greenSlider', newValue)
			},
			{
				title: 'Yellow',
				statusColor: 'yellow',
				value: this.state.yellowSlider,
				marks: {
					[this.state.greenSlider]: {
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
				value: this.state.redSlider,
				marks: {
					[this.state.yellowSlider]: {
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
		]
	}

	onChangeSlider = (sliderChanged, newValue) => {
		this.setState({
			[sliderChanged]: newValue,
			sliders: this.getSliders(),
		});
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