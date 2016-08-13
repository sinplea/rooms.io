import React from 'react';

export default class Room extends React.Component {
  render(){
    return(
      <div>
        <label>Create Room</label>
        <input onKeyUp={this.props.roomSubmit} />
      </div>
    )
  }
}
