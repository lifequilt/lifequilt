import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// Pages
import Blog from './pages/Blog';
import DonatePage from './pages/DonatePage';
import Home from './pages/Home';
import Participate from './pages/Participate';
import Partner from './pages/Participate/Partner';
import Volunteer from './pages/Participate/Volunteer';
import ThankYou from './pages/ThankYou';

// Components
import Header from './components/Header';

const styles = require('./App.css');

const customHistory = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Router history={customHistory}>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/participate" component={Participate} />
            <Route exact path="/participate/partner" component={Partner} />
            <Route exact path="/participate/volunteer" component={Volunteer} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/donate" component={DonatePage} />
            <Route path="/blog" component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
