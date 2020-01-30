import React, {Component} from 'react';
import './SideMenu.scss';
import { faTachometerAlt, faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import { healthCheck } from '../../core/healthCheck'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class SideMenu extends Component {

	state = {
        isMenuOpenned: false,
	}

	possibleItems = healthCheck;

	toggleMenu = () => {
        this.setState({ isMenuOpenned: !this.state.isMenuOpenned });
    }
	
	render() {

		const openMenu = () => !this.state.isMenuOpenned ? this.toggleMenu() : '';

		return(
			<div className={`side-menu ${this.state.isMenuOpenned ? 'side-menu-openned' : ''}`} onClick={openMenu}>

				<div className="side-menu__top">
					{this.state.isMenuOpenned &&
						<div className="side-menu-openned__top">
							<span>GLN</span>
							<FontAwesomeIcon className="side-menu-openned__top--close-icon" onClick={this.toggleMenu} icon={faBars} />
						</div>
					}
				</div>

				{!this.state.isMenuOpenned &&
					<div className="side-menu__top--tachometer-icon">
						<FontAwesomeIcon icon={faTachometerAlt} />
					</div>
				}

				{this.state.isMenuOpenned &&
					<div className="side-menu__list">
						<List component="nav" classes={{ root: "side-menu-list" }} >
							<ListSubheader className="side-menu-list__subheader">
								<div className="side-menu-list__subheader--icon">
									<FontAwesomeIcon style={{ marginRight: '5px' }} icon={faTachometerAlt} size="sm"/>
									Dedicated Monitor
								</div>
								<FontAwesomeIcon icon={faChevronUp} size="sm"/>
							</ListSubheader>

							{this.props.healthCheck.apohealthcheck.map((item, index) =>
								<ListItem key={index} className="side-menu-list__item" button onClick={this.onclickitem.bind(this, item)}>
									<span className="side-menu-list__item--content">{ this.possibleItems[Object.keys(item)[0]].title }</span>
								</ListItem>
							)}
						</List>
					</div>
				}

				{this.state.isMenuOpenned &&
					<div onClick={this.toggleMenu} className="mobile-overlay"></div>
				}

			</div>
		);
	}

	onclickitem = (link) => {
		this.props.history.push(`/detail/${Object.keys(link)[0]}`);
		this.toggleMenu();
	}
}


const mapStateToProps = (state, ownProps) => ({
    healthCheck: state.healthCheck,
});

export default compose(
	withRouter,
	connect(mapStateToProps, null),
)(SideMenu);