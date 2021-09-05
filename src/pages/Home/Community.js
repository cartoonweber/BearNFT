import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '560px',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      }
    },
    text: {
      marginBottom: '48px',
      fontSize: '18px',
      fontWeight: 400,
      color: '#4f4f4f'
    },
    communitytitle: {
      marginBottom: '24px',
      fontSize: '59px',
      fontWeight: 700,
      lineHeight: '77px',
      fontFamily: "Roboto"
    },
    button: {
      display: 'inline-block',
      fontSize: '14px',
      fontFamily: 'Roboto',
      '& button': {
        padding: '8px 24px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'white',
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
      }
    },
    date: {
      width: '320px',
      display: 'flex',
      WebkitBoxAlign: 'center',
      alignItems: 'center',
      marginTop: '16px',
      '& div': {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'rgb(105, 240, 174)'
      },
      '& p': {
        fontFamily: 'Roboto',
        fontSize: '12px',
        color: '#4f4f4f',
        margin: 0
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
      }
    }
  }),
);

function Community() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.communitytitle}>Join the Community</h1>
      <p className={classes.text}>Have any questions about the project? Join the discord for more information.</p>
      <Link to="https://discord.gg/amkbCTn8" target="_blank" rel="noreferrer">
        <div className={classes.button}>
          <button>Join The Solar Bears Discord</button>
        </div>
      </Link>
      <div className={classes.date}>
        <div></div>
        <p>&nbsp;Launch date September 7, 7PM UTC</p>
      </div>
    </div>
  );
}

export default Community;