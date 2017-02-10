import React from 'react';
import { withRouter } from 'react-router';
import { User } from '../config';

class Callback extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      error: null
    };
  }

  componentDidMount() {
    User.signinRedirectCallback().then((response) => {
        this.props.push('/');
    }).catch((err) => {
        console.error(err);
        this.setState({
          error: err.message
        })
    });
  }

  render() {
    const error = (this.state.error) ? <pre>{ this.state.error }</pre> : null;
    return <div>
      <h1>Callback</h1>
      { error }
    </div>;
  }
}
export default withRouter(Callback);