import React, { Component } from "react";
import './ProcessChain.scss';
import { Input, Button } from "antd";

class ProcessChain extends Component {

    state = {
        procChainID: '',
        busisnessArea: '',
        addedItems: [],
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return (
            <section className="proc-chain">
				<div className="proc-chain__item">
					<h5 className="proc-chain__item--title">Process Chain ID</h5>
                    <Input
                        name="procChainID"
                        placeholder="Type here"
                        className="proc-chain__item--input"
                        value={ this.state.procChainID }
                        onChange={ this.handleChange }
                    />
				</div>

				<div className="proc-chain__item">
					<h5 className="proc-chain__item--title">Business Area</h5>
                    <Input
                        name="busisnessArea"
                        placeholder="Type here"
                        className="proc-chain__item--input"
                        value={ this.state.busisnessArea }
                        onChange={ this.handleChange }
                    />
				</div>

                <div className="proc-chain__btn-container">
                    <Button
                        className="proc-chain__btn-container--add-btn"
                        onClick={ this.onAddItemClick }
                        disabled={ !this.state.procChainID || !this.state.busisnessArea }
                        type="primary"
                    >
                        Add
                    </Button>
                </div>
            </section>
        );
    }
}

export default ProcessChain;