import React, { Component } from "react";
import './Configuration.scss';
import { Divider, Button } from "antd";
import Notify from "./notify/Notify";
import { StatusSlider } from "./status-slider/StatusSlider";

class Configuration extends Component {

	render() {
		return(
			<section className="config-card">
				<header className="config-card__header">
					Alert Status
				</header>
				<Divider style={{ margin: '5px 0 24px 0' }} />	

				<div className="config-card__content">
					<StatusSlider />
					
					<Notify />
					
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