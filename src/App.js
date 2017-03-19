import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
} from 'react-router-dom';

// Pages
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Volunteer from './pages/Volunteer';

// Components
import Header from './components/Header';

class App extends Component {
  render() {
    const styles = require('./App.css');
    return (
      <div className={styles.App}>
        <Router history={hashHistory}>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/donate" component={Donate} />
            <Route path="/blog" component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
