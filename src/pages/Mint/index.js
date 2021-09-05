import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Wrap from '../../components/wrap'
import Countdown from '../../components/time'

import Carousel from './Carousel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  	slider: {
  		position: 'fixed',
  		bottom: 0
  	},
  	wrap: {
  		width: '66%',
  		margin: '1rem auto',
  		marginTop: '97px',
  		border: '2px solid black'
  	},
  	content: {
  		padding: '2.5rem 0',
  		width: '80%',
  		margin: 'auto'
  	},
  	title: {
  		fontFamily: 'Roboto',
  		textAlign: 'center'
  	},
  	input: {
  		marginTop: '30px',
  		'& input': {
  			width: '100%',
  			padding: '20px 10px',
  			border: '1px solid black'
  		}
  	},
  	meta: {
  		display: 'flex',
  		justifyContent: 'space-between',
  		marginTop: '10px'
  	},
  	btn: {
  		'& button': {
  			display: 'block',
	  		margin: 'auto',
	  		marginTop: '40px',
	  		padding: '10px 30px',
	  		fontSize: '25px',
	  		fontFamily: 'Roboto'
	  	}
  	}
  }),
);

function Mint() {
	const classes = useStyles();
	let presaleTime = new Date('2021-09-10');
	let current = new Date();

  return (
    <>
      <Carousel />
      <Wrap>
	      <div className={classes.wrap}>
	      	<div className={classes.content}>
	      		<Typography variant="h3" className={classes.title}>
			        Pre-sale starting in <Countdown startTime={presaleTime}/>
			      </Typography>
			      <div className={classes.input}>
				      <input type="number" disabled/>
				      <div className={classes.meta}>
				      	<p class="inline-flex w-1/2 tablet:w-full">Total cost: <img src="/imgs/ether/ethereum.svg" alt="Ethereum icon" /> 0.07<span class="pl-2">ETH</span></p>
				      	<p>Max 2 per wallet</p>
				      </div>
			      </div>
			      <div className={classes.btn}>
			      	<Button variant="contained" disabled>Starting Soon</Button>
			      </div>
	      	</div>
	      </div>
      </Wrap>
    </>
  );
}

export default Mint;