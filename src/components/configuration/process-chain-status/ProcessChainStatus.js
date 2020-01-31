import React, { Component } from "react";
import { SliderController } from "../slider-controller/SliderController";


class ProcessChainStatus extends Component {
	state = {
		sliders: [
			{
				title: 'Red',
				statusColor: 'red',
				value: 0,
				onChange: (newValue) => this.onChangeSlider(newValue)
			}
		]
	}

	onChangeSlider = (newValue) => {
		if(!newValue) newValue = 0;
		
		const sliders = this.state.sliders;
		sliders[0].value = parseInt(newValue);

		this.setState({ sliders });
	}

	render() {
		return (
			<SliderController 
				title="Status"
				subtitle="Status"
				amountTitle="Amount"
				sliders={ this.state.sliders }
			/>
		);
	}
}

export default ProcessChainStatus;