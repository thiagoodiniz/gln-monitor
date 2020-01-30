import React from 'react';
import './SliderController.scss';
import { Divider } from 'antd';
import { SliderItem } from '../slider-item/SliderItem';

export const SliderController = (props) => {

	return (
		<section className="slider-controller">

			<h5 className="slider-controller__title">{ props.title }</h5>


			<div className="slider-controller__subtitle">
				<div className="slider-controller__subtitle--left">
					<span>{ props.subtitle }</span>
				</div>

				<div className="slider-controller__subtitle--right">
					<span>{ props.amountTitle }</span>
					<span>Notify</span>
				</div>
			</div>

			<Divider style={{ margin: '0'}} />
			<div className="slider-controller__content">
				
				<div className="slider-controller__content--sliders">
					{ props.sliders.map((slider, index) => 
						<div key={index}>
							<SliderItem 
								slider={ slider }
								amountTitle={props.amountTitle}
							/>
							{index < props.sliders.length -1 && 
								<Divider dashed={true} style={{ margin: '0'}} />
							}
						</div>
					)}
				</div>

			</div>
		</section>
	);
}
