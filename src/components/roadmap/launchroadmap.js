import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 'auto',
      border: '2px solid black',
      marginTop: '48px',
      display: 'flex',
      flexWrap: 'wrap',
      paddingRight: '32px',
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0
      }
    },
    percent: {
      width: '227px',
      height: 'auto',
      backgroundColor: 'black',
      display: 'flex',
      WebkitBoxPack: 'center',
      justifyContent: 'center',
      WebkitBoxAlign: 'center',
      alignItems: 'center',
      marginRight: '32px',
      '& p': {
        margin: 0,
        fontSize: '88px',
        fontWeight: 400,
        TwTextOpacity: 1,
        color: '#e0e0e0'
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: '0',
        width: '100%'
      }
    },
    content: {
      width: 'calc((100% - 227px) - 32px)',
      padding: '0px 16px',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    title: {
      marginBottom: '24px',
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: '48px'
    },
    text: {
      marginBottom: '48px',
      fontSize: '18px',
      fontWeight: 400
    }
  }),
);

function Loadmap({data}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.percent}>
        <p>{data.year}</p>
      </div>
      <div className={classes.content}>
        <h3 className={classes.title}>{data.title}</h3>
        <p className={classes.text}>
          <ul>
            {data.text.map((p, index) => <li key={index}>{p}</li>)}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Loadmap;