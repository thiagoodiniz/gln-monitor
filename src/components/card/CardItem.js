import React, { Component } from 'react';
import './CardItem.scss';
import Divider from '@material-ui/core/Divider';
import { faCog, faCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends Component {

	render(){
		console.log(this.props.cardType)
		return(
			<div className="card">

				<div className="card__container">
					<span className="card__container--header card-header" color="textSecondary">
						<span>{this.props.title}</span>
						<span className="card-header__settings-button">
							<FontAwesomeIcon icon={faCog} size="sm" />
						</span>
					</span>
					
					<div className="card__container--content card-content">
						<div className="card-content__item">
							<h5 className="card-content__item--title">
								{this.props.content}
							</h5>

							{/* <span className="card-content__item--subtitle">
								Inbound				
							</span> */}
						</div>

						{/* <div className="card-content__item">
							<h5 className="card-content__item--title">
								Online
							</h5>

							<span className="card-content__item--subtitle">
								Inbound				
							</span>
						</div> */}
					</div>
				</div>
				
				<div>
					<Divider variant="middle" />

					<div className="card__footer">
						<div>
							<FontAwesomeIcon icon={faCircle} className="card__footer--status" size="sm" />
							<span>
								last updated 5 min ago		
							</span>
						</div>

						<div className="card__footer--moreDetails">
							<Link to={`/detail/${this.props.cardType}`}>
								<span>More Details</span>
							</Link>
						</div>
					</div>
				</div>

			</div>
		);

	}
}

CardItem.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	cardType: PropTypes.string.isRequired,
}

export default CardItem;