import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// Pages
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Participate from './pages/Participate';
import About from './pages/About';
import Contact from './pages/Participate/Contact';
import Partner from './pages/Participate/Partner';
import Volunteer from './pages/Participate/Volunteer';
import ThankYou from './pages/ThankYou';
import AdminLoginLink from './pages/Admin/AdminLoginLink';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

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
            <Route exact path="/participate/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/donate" component={Donate} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/admin" component={AdminLoginLink} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
