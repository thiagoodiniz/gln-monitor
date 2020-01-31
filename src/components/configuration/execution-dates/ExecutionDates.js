import React, { Component } from "react";
import './ExecutionDates.scss';
import { DatePicker } from "antd";

class ExecutionDates extends Component {

	state = {
		dateFrom: undefined,
		dateTo: undefined,
	}

	onChangeDateFrom = (event) => {
		this.setState({ dateFrom: event })
	}


	onChangeDateTo = (event) => {
		this.setState({ dateTo: event })
	}

	render() {
		return (
			<section className="exec-dates">
				<div className="exec-dates__item">
					<h5 className="exec-dates__item--title">Execution date from</h5>
					<DatePicker className="exec-dates__item--date-input" value={ this.state.dateFrom } onChange={ this.onChangeDateFrom } />
				</div>

				<div className="exec-dates__item">
					<h5 className="exec-dates__item--title">Execution date to</h5>
					<DatePicker className="exec-dates__item--date-input" value={ this.state.dateTo } onChange={ this.onChangeDateTo } />
				</div>
			</section>
		);
	}
}

export default ExecutionDates;