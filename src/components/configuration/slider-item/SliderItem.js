import React from 'react';
import './SliderItem.scss';
import { Slider, Input, Checkbox } from 'antd';
import PropTypes from 'prop-types';

export const SliderItem = (props) => {
    return (
        <div className="slider-item">
            <div className="slider-item__text">
                <div className={`slider-item__text--status status-${ props.slider.statusColor }`}></div>
                <span>{ props.slider.title }</span>
            </div>
            <Slider value={props.slider.value} marks={props.slider.marks} onChange={props.slider.onChange} className="slider-item__slider"></Slider>

            <div className="slider-item__inputs">
                <div className="slider-item__inputs--amount amount">
                    <span className="amount__title">{ props.amountTitle }</span>
                    <Input value={props.slider.value} size="small" className="amount__input"/>
                </div>
                <div className="slider-item__inputs--notify-item notify-item">
                    <span className="notify-item__title">Notify</span>
                    <Checkbox></Checkbox>
                </div>
            </div>
        </div>
    );
}

SliderItem.propTypes = {
    amountTitle: PropTypes.string.isRequired,
    slider: PropTypes.shape({
        title: PropTypes.string.isRequired,
        statusColor: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired,
        marks: PropTypes.object
    }),
}
