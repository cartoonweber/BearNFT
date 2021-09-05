import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: 'url(/imgs/background2.png)',
      width: '397px',
      height: '827px',
      marginRight: '64px',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      [theme.breakpoints.down('sm')]: {
        margin: 0,
        height: '440px',
        marginBottom: '32px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      },
    }
  }),
);

function Secondleft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
}

export default Secondleft;