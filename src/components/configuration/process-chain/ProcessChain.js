import React, { Component } from "react";
import './ProcessChain.scss';
import { Input, Button } from "antd";
import { List } from "../list/List";

class ProcessChain extends Component {

    state = {
        procChainID: '',
        busisnessArea: '',
        addedItems: [],
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onAddItemClick = () => {
		this.state.addedItems.push({
            procChainID: this.state.procChainID,
            busisnessArea: this.state.busisnessArea,
		});

		this.setState({
			...this.state,
			procChainID: '',
			busisnessArea: '',
		});
	}

	removeItem = (index) => {
		this.state.addedItems.splice(index, 1);
		this.setState(this.state);
	}

    render(){
        return (
            <>
                <section className="proc-chain">
                    <div className="proc-chain__item">
                        <h5 className="proc-chain__item--title">Process Chain ID</h5>
                        <Input
                            name="procChainID"
                            placeholder="Type here"
                            className="proc-chain__item--input"
                            value={ this.state.procChainID }
                            onChange={ this.handleChange }
                            size="small" 
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
                            size="small" 
                        />
                    </div>

                    <div className="proc-chain__btn-container">
                        <Button
                            className="proc-chain__btn-container--add-btn"
                            onClick={ this.onAddItemClick }
                            disabled={ !this.state.procChainID || !this.state.busisnessArea }
                            type="primary"
                            size="small" 
                        >
                            Add
                        </Button>
                    </div>
                </section>

            <List itemList={ this.state.addedItems } onRemoveItem={ this.removeItem } />

            </>
        );
    }
}

export default ProcessChain;