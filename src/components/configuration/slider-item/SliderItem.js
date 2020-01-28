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
                <Input size="small" className="slider-item__inputs--amount"/>
                <Checkbox></Checkbox>
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
