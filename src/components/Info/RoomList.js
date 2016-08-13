import React from 'react';

export default class RoomList extends React.Component {
  render(){
    return(
      <div class="room-list">
        <h4>Room List</h4>
        <ul>{this.props.rooms}</ul>
      </div>
    )
  }
}
