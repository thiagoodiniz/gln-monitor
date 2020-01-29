import React from 'react';
import './SliderItem.scss';
import { Slider, Input, Checkbox } from 'antd';
import PropTypes from 'prop-types';

export const SliderItem = (props) => {
    return (
        <div className="slider-item">
            <div className="slider-item__text">
                <div className={`slider-item__text--status status-${ props.statusColor }`}></div>
                <span>{ props.title }</span>
            </div>
            <Slider value={props.value} marks={props.marks} onChange={props.onChange} className="slider-item__slider"></Slider>

            <div className="slider-item__inputs">
                <div className="slider-item__inputs--amount amount">
                    <span className="amount__title">{ props.amountTitle }</span>
                    <Input size="small" className="amount__input"/>
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
	title: PropTypes.string.isRequired,
    statusColor: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    marks: PropTypes.object
}
