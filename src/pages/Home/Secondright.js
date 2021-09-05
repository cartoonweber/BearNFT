import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50%',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    },
    title: {
      marginBottom: '24px',
      fontSize: '28px',
      fontWeight: 800,
      lineHeight: '48px'
    },
    content: {
      marginBottom: '48px',
      fontSize: '18px',
      fontWeight: 400,
    }
  }),
);

function Secondleft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>Overview</h3>
      <p className={classes.content}>The Sevens is a collection of 7000 algorithmically generated pieces of art with references from pop culture, anime, games, memes and movies. The collection focuses on street-wear such as shirts, hoodies, headpieces and more. Use your Sevens in our upcoming treasure hunt or order your Sevens swag in our store (TBA).</p>
      <h3 className={classes.title}>The Story</h3>
      <p className={classes.content}>A dystopian future in 2077. After a huge global collapse, our counterculture is finding salvation in a digital universe: the metaverse powered by the Ethereum blockchain. There’s unlimited time for movies, games, comic books and music. While out there, the world is burning.</p>
      <p className={classes.content}>For generations, we have been living vicariously via our virtual selves, escaping from the physical, chaotic world, reigned by corrupt governments.</p>
      <p className={classes.content}>Hidden in the metaverse lie immense treasures. Sacrifices have to be made to find these treasures and many generations have already failed and were burned alive. We are the seventh generation (known as “The Sevens”) and we’re more powerful than ever. Will we finally be able to find the greatest treasure and gain back control over the physical world? Throughout history ‘7’ has been considered the lucky number in many cultures. Can we, The Sevens, keep the prophecy, and ourselves, alive?</p>
    </div>
  );
}

export default Secondleft;