import React,{Component} from 'react';
import './SideMenu.css';
import { faTachometerAlt, faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = () => ({
	sideMenu: {
		width: '8%',
		'@media (max-width:800px)': {
			width: '20vw'
		},
		fontSize: 14,
		fontWeight: '500',
		padding: '3vh 0',
		backgroundColor: '#001b3e',
		color: '#fff',
		boxShadow: '3px 0 5px 0 rgba(0,0,0,0.3)',
		cursor: 'pointer',
	},
	sideMenuOpenned: {
		width: '23%',
		'@media (max-width:800px)': {
			width: '60vw',
			height: '100vh',
			position: 'absolute',
			zIndex: 1,
		},
		cursor: 'unset',
	},
	sideMenuTop: {
		margin: '0 1vw 3vh 2vw',
		display: 'flex',
		justifyContent: 'space-between',
	},
	sideMenuList: {
		backgroundColor: '#00030f',
		
	},
	list: {
		paddingTop: '.5vh', 
		paddingBottom: '5vh',
	},
	listSubHeader: {
		color: '#fff', 
		backgroundColor: '#1490fc', 
		display: 'flex',
		alignItems: 'center', 
		justifyContent: 'space-between', 
		fontSize: '12px',
	},
	mobileOverlay: {
		'@media (max-width:800px)': {
			position: 'fixed',
			width: '100vw',
			height: '100vh',
			backgroundColor: 'rgba(0,0,0,.5)',
			top: '0',
			left: '60vw',
		}
	}
});


class SideMenu extends Component {

	MOCKMENUS = ["Live Cache status (LC10)","Process chain error (RSPC)","Number of objects in CIF (SMQ1/SMQ2)","Number of dumps (ST22)","Process chain execution that exceed time limit (RSPC)","Process chain execution that passed two standard deviation of last x execution (RSPC)","Memory consumption (SM04)","Highest processing time of one job in execution (SM50)","Log space (LC10)"];

	state = {
        isMenuOpenned: false,
	}

	toggleMenu = () => {
        this.setState({ isMenuOpenned: !this.state.isMenuOpenned });
    }
	
	render() {
		const { classes } = this.props;

		const openMenu = () => !this.state.isMenuOpenned ? this.toggleMenu() : '';

		return(
			<div className={`${classes.sideMenu} ${this.state.isMenuOpenned ? classes.sideMenuOpenned : ''}`} onClick={openMenu}>

				<div className={classes.sideMenuTop}>
					<span >GLN</span>

					{this.state.isMenuOpenned &&
						<div style={{flexGrow: 1, display: 'flex', justifyContent: 'space-between', marginLeft: '1vw', alignItems: 'center'}}>
							<span>DASH</span>
							<FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={this.toggleMenu} icon={faBars} />
						</div>
					}
				</div>

				{!this.state.isMenuOpenned &&
					<div style={{ marginLeft: '2vw', textAlign: 'start' }}>
						<FontAwesomeIcon icon={faTachometerAlt} />
					</div>
				}

				{this.state.isMenuOpenned &&
					<div className={classes.sideMenuList}>
					<List component="nav" className={classes.list} aria-label="main mailbox folders">
						<ListSubheader className={classes.listSubHeader}>
							<div style={{ marginLeft: '1vw' }}>
								<FontAwesomeIcon style={{ marginRight: '5px' }} icon={faTachometerAlt} size="sm"/>
								Dedicated Monitor
							</div>
							<FontAwesomeIcon icon={faChevronUp} size="sm"/>
						</ListSubheader>

						{this.MOCKMENUS.map( menu =>
							<ListItem  button onClick={this.toggleMenu} style={{ padding: '1vh 2vw 2vh 3.5vw' }}>
								<span style={{ fontSize: '10px', fontWeight: 300 }}>{menu}</span>
							</ListItem>
						)}
					</List>
					</div>
				}

				{this.state.isMenuOpenned &&
					<div onClick={this.toggleMenu} className={classes.mobileOverlay}></div>
				}

			</div>
		);
	}

}

export default withStyles(styles)(SideMenu);