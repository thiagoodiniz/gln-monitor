import React, { Component } from 'react';
import './ComparisonBase.scss';
import { Divider, Slider, Input } from 'antd';

export class ComparisonBase extends Component {

    state = {
        comparisonValue: 20,
    }
    
    setComparisonValue = (value) => {
        this.setState({comparisonValue: value});
    }

    render() {
        return (
            <section className="comparison-base">
                <h5 className="comparison-base__title">Comparison base</h5>
               
                <div className="comparison-base__subtitle">
                    <span>Last execution</span>
                    <span>Amount</span>
                </div>
                <Divider style={{ margin: '0'}} />
    
                <div className="comparison-base__content">
                    <Slider 
                        value={ this.state.comparisonValue } 
                        onChange={ this.setComparisonValue } 
                        className="comparison-base__content--slider"
                    />
                    <Input 
                        type="number" 
                        value={ this.state.comparisonValue }
                        min="0"
                        onChange={ e => this.setComparisonValue(e.currentTarget.value) }  
                        size="small" 
                        className="comparison-base__content--amount-input"
                    />
                </div>
            </section>
        );
    }
}