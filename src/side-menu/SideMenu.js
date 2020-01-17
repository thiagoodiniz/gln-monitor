import React,{Component} from 'react';
import './SideMenu.css';
import { faTachometerAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core';

const styles = () => ({
	sideMenu: {
		width: '5%',
		padding: '3vh .5vw',
		backgroundColor: '#001b3e',
		color: '#fff',
		boxShadow: '3px 0 5px 0 rgba(0,0,0,0.3)',
		cursor: 'pointer',
	},
	sideMenuOpenned: {
		width: '15%',
		cursor: 'unset',
	},
	sideMenuTop: {
		marginBottom: '5vh',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '0 1vw',
	},
});


class SideMenu extends Component {

	state = {
        isMenuOpenned: false,
	}

	toggleMenu = () => {
		console.log('eai')
        this.setState({ isMenuOpenned: !this.state.isMenuOpenned });
    }
	
	render() {
		const { classes } = this.props;

		const openMenu = () => !this.state.isMenuOpenned ? this.toggleMenu() : '';

		return(
			<div className={`${classes.sideMenu} ${this.state.isMenuOpenned ? classes.sideMenuOpenned : ''}`} onClick={openMenu}>
				<div className={classes.sideMenuTop}>
					<span >GLN</span>

					{this.state.isMenuOpenned === true &&
						<div style={{flexGrow: 1, display: 'flex', justifyContent: 'space-between', marginLeft: '1vw', alignItems: 'center',}}>
							<span>DASH</span>
							<FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={this.toggleMenu} icon={faBars} />
						</div>
					}
				</div>
				<FontAwesomeIcon icon={faTachometerAlt} />
			</div>
		);
	}

}

export default withStyles(styles)(SideMenu);