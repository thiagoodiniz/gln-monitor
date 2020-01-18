import React, {Component} from 'react';
import './SideMenu.scss';
import { faTachometerAlt, faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

class SideMenu extends Component {

	MOCKMENUS = ["Live Cache status (LC10)","Process chain error (RSPC)","Number of objects in CIF (SMQ1/SMQ2)","Number of dumps (ST22)","Process chain execution that exceed time limit (RSPC)","Process chain execution that passed two standard deviation of last x execution (RSPC)","Memory consumption (SM04)","Highest processing time of one job in execution (SM50)","Log space (LC10)"];

	state = {
        isMenuOpenned: false,
	}

	toggleMenu = () => {
        this.setState({ isMenuOpenned: !this.state.isMenuOpenned });
    }
	
	render() {

		const openMenu = () => !this.state.isMenuOpenned ? this.toggleMenu() : '';

		return(
			<div className={`side-menu ${this.state.isMenuOpenned ? 'side-menu-openned' : ''}`} onClick={openMenu}>

				<div className="side-menu__top">
					<span >GLN</span>

					{this.state.isMenuOpenned &&
						<div className="side-menu-openned__top">
							<span>DASH</span>
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

							{this.MOCKMENUS.map( menu =>
								<ListItem className="side-menu-list__item" button onClick={this.toggleMenu}>
									<span className="side-menu-list__item--content">{menu}</span>
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

}

export default SideMenu;