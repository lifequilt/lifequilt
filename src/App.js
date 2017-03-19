import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
} from 'react-router-dom';

// Pages
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Participate from './pages/Participate';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const styles = require('./App.css');

const App = () => (
  <div className={styles.App}>
    <Router history={hashHistory}>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/participate" component={Participate} />
        <Route path="/donate" component={Donate} />
        <Route path="/blog" component={Blog} />
        <Footer />
      </div>
    </Router>
  </div>
);

export default App;
