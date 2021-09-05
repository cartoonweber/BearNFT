import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typed from "react-typed";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginTop: '97px',
      width: '560px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    title: {
      marginBottom: '24px',
      fontSize: '59px',
      fontWeight: 700,
      lineHeight: '77px',
      fontFamily: 'Roboto'
    },
    movespan: {
      color: '#eb1c24'
    },
    content: {
      marginBottom: '48px',
      fontSize: '18px',
      fontWeight: 400,
      color: 'rgba(79,79,79,var(--tw-text-opacity))'
    },
  }),
);

function Introduction() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        The Solar Bears are <br/>
        <span className={classes.movespan}>
          <Typed
            strings={["NFT Collectibles.", "a counter-culture.", "avatars.", "keys."]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </span>
      </h1>
      <p className={classes.content}>7,000 unique aesthetic collectibles with references from pop culture, anime, games, memes, movies, and more. Find your fit in the metaverse.</p>
    </div>
  );
}

export default Introduction;