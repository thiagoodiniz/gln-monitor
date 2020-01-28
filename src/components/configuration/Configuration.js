import React, { Component } from "react";
import './Configuration.scss';
import { Divider, Button } from "antd";
import Notify from "./notify/Notify";
import { StatusSlider } from "./status-slider/StatusSlider";

class Configuration extends Component {

	state = {
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
		return(
			<section className="config-card">
				<header className="config-card__header">
					Alert Status
				</header>
				<Divider style={{ margin: '5px 0 24px 0' }} />	

				<div className="config-card__content">
					<StatusSlider title="Status" amountTitle="Amount" sliders={ this.state.sliders } />
					
					<Notify />
					
					<div className="config-card__content--actions">
						<Button style={{ marginRight: '1vw'}} type="default">Cancel</Button>
						<Button type="primary">Save</Button>
					</div>
				</div>
			</section>
		);
	}

}

export default Configuration;