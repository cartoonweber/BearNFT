import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import { Link  } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Wrap = styled.div`
  width: 100%;
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  padding: 24px;
  padding-top: 40px;
`

const Card = styled.div`
	width: 127px;
  height: 127px;
  position: fixed;
  top: 0px;
  z-index: 1;
  background-image: url(/imgs/head_card.png);
`

const HeaderMenu = styled.ul`
	list-style: none;
  display: flex;
  margin-left: auto;
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
`

const HeaderMenuItem = styled(Link)`
  color: rgb(79, 79, 79);
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-left: 32px;
  height: 40px;
  '& span': {
  	padding-bottom: .25rem;
	}
  @media (max-width: 768px) {
    display: none;
  }
`

const HamboogerMenuItem = styled(Link)`
  color: rgb(79, 79, 79);
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-left: 32px;
  height: 40px;
  '& span': {
    padding-bottom: .25rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

function Header() {
  const classes = useStyles();
  const [hambooger, setHambooger] = React.useState(false);

  const toggleDrawer = open => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setHambooger(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Link to='/'>
            <ListItemText primary='Home' />
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/mint'>
            <ListItemText primary='Mint' />
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/gallery'>
            <ListItemText primary='Galley' />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Wrap>
      <Content>
      	<a>
	      	<Card />
      	</a>
      	<HeaderMenu>
      		<HeaderMenuItem to="/">
      			<span>Home</span>
      		</HeaderMenuItem>
      		<HeaderMenuItem to="/mint">
      			<span>Mint</span>
      		</HeaderMenuItem>
      		<HeaderMenuItem to="/gallery">
      			<span>Galley</span>
      		</HeaderMenuItem>
          <HamboogerMenuItem>
            <MenuIcon onClick={toggleDrawer(true)}/>
          </HamboogerMenuItem>
      	</HeaderMenu>
      </Content>
      <Drawer anchor='right' open={hambooger} onClose={toggleDrawer(false)}>
        {list('right')}
      </Drawer>
    </Wrap>
  );
}

export default Header;