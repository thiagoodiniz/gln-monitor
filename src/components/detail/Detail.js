import React, { Component } from "react";
import './Detail.scss';
import { Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { healthCheck } from '../../core/healthCheck';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Detail extends Component {

	possibleItems = healthCheck;

	cardType = this.props.match.params.cardType;
	
	constructor(props) {
		super(props);

		const item = this.props.healthCheck.find(item => item[this.cardType]);

		this.state = {
			title: this.possibleItems[this.cardType].title,
			content: Object.values(item)[0],
			data: this.getDataToTable(item),
		}
	}

	getDataToTable = (item) => {
		let dataToTable = Object.values(item)[1];
		dataToTable = dataToTable.map((item, idx) => {
			return {
				...item,
				key: idx, // Each item in the table needs to have a key
			}
		});

		return dataToTable;
	}

	componentDidUpdate = (prevProps, prevState) => {
		if(this.props.location.pathname !== prevProps.location.pathname) {
			this.cardType = this.props.match.params.cardType;
			const item = this.props.healthCheck.find(item => item[this.cardType]);
			
			this.setState({
				title: this.possibleItems[this.cardType].title,
				content: Object.values(item)[0],
				data: this.getDataToTable(item),
			});
		}
	}

	render(){
		const columns = [];
		
		Object.keys(this.possibleItems[this.cardType].details).map((item, idx) => 
			columns.push({
				title: this.possibleItems[this.cardType].details[item],
				width: idx < 1 ? 100 : 150,
				dataIndex: item,
				key: item,
				fixed: idx < 1 ? 'left' : '',
			})
		);
		return(
			<section className="detail-card" >

				<header className="detail-card__header">
					<div className="detail-card__header--item-info item-info">
						<span className="item-info--content">{ this.state.content }</span>
						<span className="item-info--title">{ this.state.title }</span>
					</div>

					<div className="detail-card__header--config config">
						<Link to={`/config/${this.cardType}`}>
							<span className="config__settings-button">
								<FontAwesomeIcon icon={ faCog } size="sm" />
								<span className="config__settings-button--text">Configuration</span>
							</span>
						</Link>
					</div>
				</header>

				<Table pagination={false} 
					dataSource={this.state.data} 
					scroll={{ x: 300, y: 500 }} 
					size="middle" 
					useFixedHeader={true} 
					columns={columns}>
				</Table>
				
			</section>
		);
	}


}

const mapStateToProps = (state, ownProps) => ({
	healthCheck: state.healthCheck.apohealthcheck,
})

export default connect(mapStateToProps, null)(Detail);