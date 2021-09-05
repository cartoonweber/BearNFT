import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '77px',
      backgroundColor: 'white',
      padding: '16px',
      display: 'flex',
      marginTop: '127px',
      marginBottom: '24px',
      marginRight: '0px'
    },
    price: {
      marginBottom: '48px',
      fontSize: '18px',
      fontWeight: 400,
      textAlign: 'center',
      color: '#e0e0e0'
    },
    button: {
      padding: '24px',
      width: '320px',
      height: '77px',
      background: 'white',
      margin: 'auto',
      display: 'block',
      '& p': {
        marginBottom: '48px',
        fontSize: '18px',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 0
      }
    },
    total: {
      width: '77px',
      height: '45px',
      backgroundColor: 'black',
      padding: '8px',
      '& p': {
        marginBottom: '48px',
        fontSize: '18px',
        fontWeight: 400,
        color: '#e0e0e0',
      }
    },
    triangle: {
      width: '0px',
      height: '0px',
      borderTop: '45px solid black',
      borderRight: '45px solid transparent'
    }
  }),
);

function Presale() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.total}>
          <p>0/7000 </p>
        </div>
        <div className={classes.triangle}>
        </div>
      </div>
      <p className={classes.price}>Price: 0.07 ETH</p>
      <a className={classes.button} href="/mint"><p>Pre-Sale</p></a>
    </>
  );
}

export default Presale;