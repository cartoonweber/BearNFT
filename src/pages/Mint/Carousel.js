import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  	image: {
	    width: '100%',
    	height: '100%'
  	},
  	slider: {
  		position: 'fixed',
  		bottom: 0,
      maxHeight: 'calc(33.33333vh)',
  		'& .rec-slider-container': {
  			margin: 0
  		}
  	}
  }),
);

const images = [
  '/imgs/carousel/image1.png',
  '/imgs/carousel/image2.png',
  '/imgs/carousel/image3.png',
  '/imgs/carousel/image4.png',
  '/imgs/carousel/image5.png',
  '/imgs/carousel/image6.png',
  '/imgs/carousel/image7.png'
];

function Home() {
	const classes = useStyles();

  return (
    <>
    	<Carousel
        isRTL={false}
        pagination={false}
        itemsToShow = {5}
        showArrows={false}
        className={classes.slider}
        autoPlaySpeed={2000}
        enableAutoPlay={true}
      >
        {images.map((url, index) => (
    			<div>
		        <img className={classes.image} src={url} />
		      </div>
    		))}
      </Carousel>
    </>
  );
}

export default Home;