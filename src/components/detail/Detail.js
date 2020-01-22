import React, { Component } from "react";
import './Detail.scss';
import { Table } from "antd";
import Column from "antd/lib/table/Column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { healthCheck } from '../../core/healthCheck';
import { connect } from "react-redux";

class Detail extends Component {

	possibleItems = healthCheck;

	cardType = this.props.match.params.cardType;
	
	constructor(props) {
		super(props);

		const item = this.props.healthCheck.find(item => item[this.cardType]);

		let dataToTable = Object.values(item)[1];
		dataToTable = dataToTable.map((item, idx) => {
			return {
				...item,
				key: idx, // Each item in the table needs to have a key
			}
		});

		this.state = {
			title: this.possibleItems[this.cardType].title,
			content: Object.values(item)[0],
			data: dataToTable,
		}
	}

	render(){
			return(
				<section className="detail-card" >

					<header className="detail-card__header">
						<div className="detail-card__header--item-info item-info">
							<span className="item-info--content">{ this.state.content }</span>
							<span className="item-info--title">{ this.state.title }</span>
						</div>

						<div className="detail-card__header--config config">
							<span className="config__settings-button">
								<FontAwesomeIcon icon={ faCog } size="sm" />
								<span className="config__settings-button--text">Configuration</span>
							</span>
						</div>
					</header>

					<Table pagination={false} dataSource={this.state.data} size="middle" scroll={{ x: '90%' }} >
						{Object.keys(this.possibleItems[this.cardType].details).map((item) => 
							<Column align="center" title={this.possibleItems[this.cardType].details[item]} dataIndex={item} key={item} />
						)}
					</Table>
					
				</section>
			);
	}


}

const mapStateToProps = (state, ownProps) => ({
	healthCheck: state.healthCheck.apohealthcheck,
})

export default connect(mapStateToProps, null)(Detail);