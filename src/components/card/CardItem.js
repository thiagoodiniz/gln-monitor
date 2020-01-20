import React from 'react';
import './CardItem.scss';
import Divider from '@material-ui/core/Divider';
import { faCog, faCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const CardItem = (props) => {

		return(
			<div className="card">

				<div className="card__container">
					<span className="card__container--header card-header" color="textSecondary">
						<span>{props.title}</span>
						<span className="card-header__settings-button">
							<FontAwesomeIcon icon={faCog} size="sm" />
						</span>
					</span>
					
					<div className="card__container--content card-content">
						<div className="card-content__item">
							<h5 className="card-content__item--title">
								Online
							</h5>

							<span className="card-content__item--subtitle">
								Inbound				
							</span>
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
							<span>More Details</span>
						</div>
					</div>
				</div>

			</div>
		);
}