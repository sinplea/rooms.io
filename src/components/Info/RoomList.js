import React from 'react';

export default class RoomList extends React.Component {
  render(){
    return(
      <div class="room-list">
        <h4>Rooms</h4>
        <ul>{this.props.rooms}</ul>
      </div>
    )
  }
}
