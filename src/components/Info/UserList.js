import React from 'react';

export default class UserList extends React.Component {
  render(){
    return(
      <div class="user-options">
        <h4>User List</h4>
        <ul>{this.props.users}</ul>
      </div>
    )
  }
}
