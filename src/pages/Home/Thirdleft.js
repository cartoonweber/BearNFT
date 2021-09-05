import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    }
  }),
);

const images = [
  {
    original: '/imgs/slider/image1.png',
    thumbnail: '/imgs/slide_thumb/thumb1.png',
  },
  {
    original: '/imgs/slider/image2.png',
    thumbnail: '/imgs/slide_thumb/thumb2.png',
  },
  {
    original: '/imgs/slider/image3.png',
    thumbnail: '/imgs/slide_thumb/thumb3.png',
  },
  {
    original: '/imgs/slider/image4.png',
    thumbnail: '/imgs/slide_thumb/thumb4.png',
  },
  {
    original: '/imgs/slider/image5.png',
    thumbnail: '/imgs/slide_thumb/thumb5.png',
  },
  {
    original: '/imgs/slider/image6.png',
    thumbnail: '/imgs/slide_thumb/thumb6.png',
  },
  {
    original: '/imgs/slider/image7.png',
    thumbnail: '/imgs/slide_thumb/thumb7.png',
  },
];

function Secondleft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageGallery items={images} />
    </div>
  );
}

export default Secondleft;