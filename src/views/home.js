import React from 'react';
import { User } from '../config';
import Private from './private';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: null
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    User
      .createSigninRequest()
      .then((req) => {
        window.location = req.url;
      });
  }

  componentDidMount() {
    
    User.getUser().then( (user) => {

      if(user === null) {
        this.setState({
          logged: false
        });
      }
      else {
        this.setState({
          logged: true,
          user
        });
      }
    })
    .catch( (err) => {
      console.error(err);
    });
  }

  render() {
    switch (this.state.logged) {

      case true:
        return <Private user={ this.state.user } />;

      case false:
        return <a
            alt="login"
            className="App-login"
            onClick={this.handleLogin}
            href="#"
          >
            Log in with Portal account
          </a>;

      default:
        return <h2>Loading</h2>;
    }
    if(this.state.logged === true) {
      return <h1>Home</h1>;
    }
    else {
      return <a
        alt="login"
        className="App-login"
        onClick={this.handleLogin}
      >Log in with Portal account</a>
    }
  }
}
export default Home;