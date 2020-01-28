import React from 'react';
import './StatusSlider.scss';
import { Divider } from 'antd';
import { SliderItem } from '../slider-item/SliderItem';
import PropTypes from 'prop-types';

export const StatusSlider = (props) => {
    return (
        <section className="status-slider">

            <h5 className="status-slider__title">{ props.title }</h5>

            <div className="status-slider__subtitle">
                <span>{ props.amountTitle }</span>
                <span>Notify</span>
            </div>

            <Divider style={{ margin: '0'}} />
            <div className="status-slider__content">
                
                <div className="status-slider__content--sliders">
                    { props.sliders.map((slider, index) => 
                        <div key={index}>
                            <SliderItem title={slider.title} statusColor={slider.statusColor} onChange={ slider.onChange } value={ slider.value } marks={slider.marks}/>
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

StatusSlider.propTypes = {
	title: PropTypes.string.isRequired,
    amountTitle: PropTypes.string.isRequired,
    sliders: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        statusColor: PropTypes.string.isRequired,
    })).isRequired
}
