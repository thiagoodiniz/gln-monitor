import React, { Component } from 'react';
import './StatusSlider.scss';
import { Divider } from 'antd';
import { SliderItem } from '../slider-item/SliderItem';

export class StatusSlider extends Component {

    state = {
        title: 'Status',
        amountTitle: 'Amount',
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
            <section className="status-slider">
    
                <h5 className="status-slider__title">{ this.state.title }</h5>
    
                <div className="status-slider__subtitle">
                    <span>{ this.state.amountTitle }</span>
                    <span>Notify</span>
                </div>
    
                <Divider style={{ margin: '0'}} />
                <div className="status-slider__content">
                    
                    <div className="status-slider__content--sliders">
                        { this.state.sliders.map((slider, index) => 
                            <div key={index}>
                                <SliderItem 
                                    title={slider.title} 
                                    statusColor={slider.statusColor} 
                                    onChange={ slider.onChange } 
                                    value={ slider.value } 
                                    marks={slider.marks}
                                    amountTitle={this.state.amountTitle}
                                />
                                {index < this.state.sliders.length -1 && 
                                    <Divider dashed={true} style={{ margin: '0'}} />
                                }
                            </div>
                        )}
                    </div>
    
                </div>
            </section>
        );
    }
}
