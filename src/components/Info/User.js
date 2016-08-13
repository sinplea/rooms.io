import React from 'react';

export default class User extends React.Component {
  render(){
    return(
      <div>
        <label>Create User</label>
        <input onKeyUp={this.props.userSubmit} />
      </div>
    )
  }
}
