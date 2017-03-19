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
import About from './pages/About';

// Components
import Header from './components/Header';

const styles = require('./App.css');

const App = () => (
  <div className={styles.App}>
    <Router history={hashHistory}>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/participate" component={Participate} />
        <Route path="/donate" component={DonatePage} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </div>
);

export default App;
