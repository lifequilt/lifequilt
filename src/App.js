import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
} from 'react-router-dom';

// Pages
import Blog from './pages/Blog';
import DonatePage from './pages/DonatePage';
import Home from './pages/Home';
import Participate from './pages/Participate';
import Partner from './pages/Participate/Partner';
import Volunteer from './pages/Participate/Volunteer';

// Components
import Header from './components/Header';

const styles = require('./App.css');

const App = () => (
  <div className={styles.App}>
    <Router history={hashHistory}>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/participate" component={Participate} />
        <Route path="/donate" component={DonatePage} />
        <Route path="/blog" component={Blog} />
        <Route path="/participate/partner" component={Partner} />
        <Route path="/participate/volunteer" component={Volunteer} />
      </div>
    </Router>
  </div>
);

export default App;
