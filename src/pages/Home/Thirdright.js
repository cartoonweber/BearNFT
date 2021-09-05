import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: '64px',
      width: '40%',
      height: '100%',
      border: '1px solid white',
      padding: '24px',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0
      }
    },
    title: {
      marginBottom: '24px',
      fontSize: '28px',
      fontWeight: 800,
      lineHeight: '48px'
    },
    contenttext1: {
      marginBottom: '48px',
      fontSize: '18px',
      fontWeight: 400,
    },
    contenttext2: {
      marginBottom: '1rem',
      fontSize: '16px',
      fontWeight: 400,
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 3
    }
  }),
);

function Secondleft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h3 className={classes.title}>F.A.Q.</h3>
        <p className={classes.contenttext2}>What is the total supply?</p>
        <p className={classes.contenttext1}>A total of 7000 unique sevens NFTs will be created.</p>
        <p className={classes.contenttext2}>When is the launch?</p>
        <p className={classes.contenttext1}>We will launch on September 7, 7PM UTC.</p>
        <p className={classes.contenttext2}>How much does it cost to mint an NFT?</p>
        <p className={classes.contenttext1}>0.07 ETH + gas.</p>
        <p className={classes.contenttext2}>Will there be a pre-sale?</p>
        <p className={classes.contenttext1}>We will make sure that active community members will be rewarded.</p>
        <p className={classes.contenttext2}>Have more questions? Come through to our <a href="https://discord.gg/MGJK35qY5n" target="_blank" rel="noreferrer">Discord </a>to learn more.</p>
      </div>
    </div>
  );
}

export default Secondleft;