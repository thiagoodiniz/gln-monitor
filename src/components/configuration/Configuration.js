import React, { Component } from "react";
import './Configuration.scss';
import { Divider, Button } from "antd";
import Notify from "./notify/Notify";
// import { StatusSlider } from "./status-slider/StatusSlider";
import { ComparisonBase } from "./comparison-base/ComparisonBase";
import { NumberOfDumps } from "./number-of-dumps/NumberOfDumps";
import { MemoryStatus } from "./memory-status/MemoryStatus";
import { getConfigMenus, configMenusEnum } from "../../core/healthCheck-config-db";
import ExecutionDates from "./execution-dates/ExecutionDates";

class Configuration extends Component {

	cardType = this.props.match.params.cardType;
	state = {
		menus: getConfigMenus(this.cardType)
	}

	render() {
		return(
			<section className="config-card">
				<header className="config-card__header">
					Alert Status
				</header>
				<Divider style={{ margin: '5px 0 24px 0' }} />	

				<div className="config-card__content">

					{this.state.menus.includes(configMenusEnum.EXECUTION_DATES) && 
				 		<ExecutionDates />
					}

					{this.state.menus.includes(configMenusEnum.COMPARISON_BASE) && 
						<ComparisonBase />
					}

					{this.state.menus.includes(configMenusEnum.NUMBER_OF_DUMPS) &&
						<NumberOfDumps />				
					}
					
					{this.state.menus.includes(configMenusEnum.MEMORY_STATUS) && 
						<MemoryStatus />
					}

					{this.state.menus.includes(configMenusEnum.NOTIFY) && 
						<Notify />
					}
					
					<div className="config-card__content--actions">
						<Button style={{ marginRight: '1vw'}} type="default">Cancel</Button>
						<Button type="primary">Save</Button>
					</div>
				</div>
			</section>
		);
	}

}

export default Configuration;