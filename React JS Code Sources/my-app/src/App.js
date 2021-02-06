import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/main_components/Container';
import './css/style.css';
import './css/responsive.css';

import store from './store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
              <Switch>
                <Route path="/" component={Container} /> 
              </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
