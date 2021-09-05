import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Wrap from '../../components/wrap'
import Content from '../../components/content'
import DevRoadmap from '../../components/roadmap/devroadmap'
import LaunchRoadmap from '../../components/roadmap/launchroadmap'

import Introduction from './Introduction';
import Introslider from './Introslider';
import Secondleft from './Secondleft';
import Secondright from './Secondright';
import Thirdleft from './Thirdleft';
import Thirdright from './Thirdright';
import Presale from './Presale';
import Community from './Community';

import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

const CustomWrap = styled(Wrap)`
  width: 100%;
  max-width: 1370px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 24px;
  padding-left: 24px;
  background-color: #000;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    firstcontent: {
      margin: '97px 24px 0px !important',
	    display: 'flex',
	    position: 'relative',
	    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
    		marginTop: '32px',
      }
    },
    lighttitle: {
	    marginBottom: '24px',
	    fontSize: '59px',
	    fontWeight: 700,
	    lineHeight: '77px',
	    [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
	    	lineHeight: '60px',
	    	textAlign: 'center'
      }
    },
    darktitle: {
	    marginBottom: '24px',
	    fontSize: '59px',
	    fontWeight: 700,
	    lineHeight: '77px',
	    color: '#e0e0e0'
    },
    text: {
    	marginBottom: '48px',
      fontSize: '18px',
      fontWeight: 400,
      color: '#e0e0e0'
    },
    second: {
      marginTop: '247px',
      marginLeft: '24px',
    	marginRight: '24px',
    	[theme.breakpoints.down('sm')]: {
    		marginTop: '50px'
    	}
    },
    launchroadmap: {
      marginTop: '120px',
      marginLeft: '24px',
    	marginRight: '24px'
    },
    devroadmap: {
    	marginLeft: '24px',
    	marginRight: '24px'
    },
    secondcontent: {
    	marginTop: '67px',
	    display: 'flex',
	    flexWrap: 'wrap',
	    position: 'relative'
    },
    third: {
	    padding: '64px 0px',
	    marginTop: '120px',
	    width: '100%',
	    height: '100%',
    },
    thirdcontent: {
    	margin: '67px 24px 0px',
	    display: 'flex',
	    flexWrap: 'wrap',
	    position: 'relative',
	    [theme.breakpoints.down('sm')]: {
	    	margin: '67px 0 0',
      }
    },
    community: {
    	margin: '124px 24px',
    	position: 'relative'
    },
    social: {
    	display: 'flex',
    	justifyContent: 'end',
    	'& ul': {
	    	display: 'flex',
		    listStyle: 'none',
		    right: '0px',
		    bottom: '96px',
		    color: 'black',
		    marginTop: '40px',
		  },
	    '& li': {
	    	marginRight: '24px'
	    },
	    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      }
    },
    communitytext: {
	    marginBottom: '1rem',
	    fontSize: '16px',
	    fontWeight: 400,
	    overflow: 'hidden',
	    display: '-webkit-box',
	    WebkitBoxOrient: 'vertical',
	    WebkitLineClamp: 3,
	    textAlign: 'center'
    }
  }),
);

const launchroadmap = [
	{
		percent: 10,
		title: 'Grand Skyfall',
		text1: '7 new characters enter the metaverse, falling from the sky. Will you be one of 7 lucky community members to receive an airdropped NFT which we guarantee to have a minimum sale value of 0.7 eth if you decide to list!',
		text2: 'The treasury is now also growing and contains 14ETH!'
	},
	{
		percent: 25,
		title: 'The First Hints',
		text1: 'Sketches of previous generations will be sent to 7 lucky community members. Rumours are, these sketches provide some secret information.',
		text2: 'Another 21ETH has been added to the treasury.'
	},
	{
		percent: 50,
		title: 'Who Dis?',
		text1: 'A mysterious Seven shows up in the metaverse. Will you be able to catch it and be the first 1 of 1?',
		text2: 'The treasury receives another 28ETH.'
	},
	{
		percent: 100,
		title: 'The Treasure Hunt',
		text1: 'The story unfolds and the treasure hunt will soon begin. Throughout the artwork lies references to anime, shows, games, and pop culture. These will be used as the main themes and questions for the hunt. Discussions will be housed in our Discord server.',
		text2: 'Another 35ETH added amounting to a total of 98ETH in the treasury.'
	},
]

const devroadmap = [
	{
		year: 2021,
		title: 'Q4',
		text: [
			'The Sevens rarity data will be added to Rarity.tools as well as Rarity Sniper.',
			'Launch of the Sevens online shop for clothes, masks and accesories.',
			'With the treasure hunt now concluded, work on Season 2 will start.',
			'A lot of the projects in the space are fairly siloed. We imagine a future where a lot of NFT projects do collabs with one another, like many fashion brands in the world. We’ll be looking and reaching out to potential collaboration partners.'
		],
	},
	{
		year: 2022,
		title: 'Q1',
		text: [
			'Season 2 launch. Season 1 holders will have priority minting (amount TBC) as well as active community members.',
			'The Sevens to launch an incubation program working with artists that have a passion for making unique art pieces and fashion attributes. The community treasury will help fund future projects chosen by our community.'
		],
	},
	{
		year: 2022,
		title: 'Q2',
		text: [
			'Development and release of The Sevens DAO with $SEVEN token airdropped to all hodlers proportionally.',
			'Launch of Season 3.',
			'The Sevens collection will now be deflationary through a unique mutation mechanism.'
		],
	}
]

function Home() {
	const classes = useStyles();

  return (
    <>
      <Wrap>
      	<div className={classes.firstcontent}>
      		<Introduction />
      		<Introslider />
      	</div>
      </Wrap>
      <Wrap>
    		<div className={classes.second}>
      		<h1 className={classes.lighttitle}>Our salvation is the metaverse.</h1>
      		<div className={classes.secondcontent}>
	      		<Secondleft />
	      		<Secondright />
	      	</div>
	      </div>
      </Wrap>
  		<CustomWrap>
	    	<div className={classes.third}>
	    		<Wrap>
	    			<h1 className={classes.darktitle}>What To Know.</h1>
	    			<div className={classes.thirdcontent}>
	    				<Thirdleft />
		      		<Thirdright />
	    			</div>
	    		</Wrap>
	    	</div>
  		</CustomWrap>
  		<Wrap>
    		<div className={classes.launchroadmap}>
      		<h1 className={classes.lighttitle}>Launch Roadmap</h1>
      		{launchroadmap.map((roadmap, index) => <DevRoadmap key={index} data={roadmap}/>)}
	      </div>
      </Wrap>
      <Wrap>
    		<div className={classes.devroadmap}>
      		<h1 className={classes.lighttitle}>Development Roadmap</h1>
      		{devroadmap.map((roadmap, index) => <LaunchRoadmap key={index} data={roadmap}/>)}
	      </div>
      </Wrap>
      <CustomWrap>
	    	<div className={classes.third}>
	    		<Wrap>
	    			<h1 className={classes.darktitle}>Get Ready For The Launch</h1>
	    			<p className={classes.text}>Pre-Sale launch 4th Sept 2021 2PM UTC.</p>
    				<Presale />
	    		</Wrap>
	    	</div>
  		</CustomWrap>
  		<Wrap>
    		<div className={classes.community}>
	      	<div style={{width: '100%'}}>
      			<Community />
	      	</div>
	      	<div className={classes.social}>
	      		<ul>
	      			<li>
	      				<Link to='/'><FaTwitter /></Link>
	      			</li>
	      			<li>
	      				<Link to='/'><FaDiscord /></Link>
	      			</li>
	      			<li>
	      				<Link to='/'><FaInstagram /></Link>
	      			</li>
	      		</ul>
	      	</div>
      		<p className={classes.communitytext}><a href="https://twitter.com/@thesevens_7" target="_blank" rel="noreferrer">@thesevens_7</a>, designed with 💖 and drawn with a whole lot of 🍷.</p>
      		<p className={classes.communitytext}><a href="mailto:info@thesevensofficial.com">info@thesevensofficial.com</a></p>
	      </div>
      </Wrap>
    </>
  );
}

export default Home;