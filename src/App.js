import { Router, Route, Switch, BrowserRouter  } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './pages/Home'
import Mint from './pages/Mint'

import Header from './components/header'

import './App.css';

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
    	<Header />
    	<Switch>
	      <Route exact path="/" component={Home} />
	      <Route path="/mint" component={Mint} />
			</Switch>
    </Router>
  );
}

export default App;