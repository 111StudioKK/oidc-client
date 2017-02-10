import React from 'react';
import { User } from '../config';

class Private extends React.Component {
  
  constructor(props) {
    super(props);
  }

  handleLogout(e){
    e.preventDefault();
    User
      .removeUser()
      .then( () => {
        User
          .createSignoutRequest()
          .then((req) => {
            window.location = req.url;
        });
    });
  }

  render() {
    return(
      <div>
        <h2>User Profile <a href="#" className="Logout" onClick={this.handleLogout}>logout</a></h2>
        <pre>
          { JSON.stringify(this.props.user.profile, null, 2) }
        </pre>
      </div>);
  }
}

export default Private;