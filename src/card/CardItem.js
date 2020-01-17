import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { faCog, faCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
	card: {
		width: 238,
		minHeight: 150,
		maxHeight: 220,
		margin: 10,
		borderRadius: 2,
		textAlign: 'start',
		backgroundColor: '#fff',
		padding: '14px 14px 5px 14px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 12,
		color: '#acacac',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		wordBreak: 'break-all',
	},
	settingsButton: {
		color: '#9fd1fd', 
		alignSelf: 'flex-start', 
		paddingLeft: '5px',
		position: 'relative',
		bottom: '5px',
		cursor: 'pointer'
	},
	cardContainer: {
	},
	cardContent: {
		marginBottom: '2vh',
		display: 'flex',
		justifyContent: 'space-around',
	},
	cardContentTitle:{
		fontSize: '2.5rem',
		fontWeight: 'bold',
	},
	cardContentSubTitle:{
		fontSize: '.8rem',
	},
	footer: {
		display: 'flex',
		fontSize: 10,
		padding: '14px 0 10px 0',
		justifyContent: 'space-between',
	},
	status: {
		color: 'green',
		marginRight: '5px'
	},
	moreDetails: {
		cursor: 'pointer',
		color: '#4fabfc', 
		fontWeight: 'bold',
	}
});


export const CardItem = () => {
		const classes = useStyles();

		return(
			<div className={classes.card}>

				<div className={classes.cardContainer}>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						<span>Word of the Day</span>
						<span className={classes.settingsButton}>
							<FontAwesomeIcon icon={faCog} size="sm" />
						</span>
					</Typography>
					
					<div className={classes.cardContent}>
						<div style={{textAlign: 'center'}}>
							<Typography className={classes.cardContentTitle} variant="h5" component="h2">
								425
							</Typography>

							<Typography className={classes.cardContentSubTitle} variant="h5" color="textSecondary">
								Inbound				
							</Typography>
						</div>

						<div style={{textAlign: 'center'}}>
							<Typography className={classes.cardContentTitle} variant="h5" component="h2">
								425
							</Typography>

							<Typography className={classes.cardContentSubTitle} variant="h5" color="textSecondary">
								Inbound				
							</Typography>
						</div>
					</div>
				</div>

				
				<div>
					<Divider variant="middle" />

					<div className={classes.footer}>
						<div>
							<FontAwesomeIcon icon={faCircle} className={classes.status} size="sm" />
							<Typography variant="inherit" color="textSecondary">
								last updated 5 min ago		
							</Typography>
						</div>

						<div className={classes.moreDetails}>
							<span>More Details</span>
						</div>
					</div>
				</div>

			</div>
		);
}