import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '520px',
      width: '520px',
      overflow: 'hidden',
      marginRight: 'auto',
      marginLeft: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 'auto',
        '& img': {
          width: '100%',
        }
      }
    }
  }),
);

function Introslider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src='./imgs/introslider.png' />
    </div>
  );
}

export default Introslider;