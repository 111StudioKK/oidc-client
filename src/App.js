import './App.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './views/home';
import Callback from './views/callback';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
      return <div className="App">
        <Router>
          <div className="App-instructions App-flex">
            <Route exact path="/" component={Home} />
            <Route exact path="/cb" component={Callback} />
          </div>
        </Router>
      </div>;
    }
};

export default App;
