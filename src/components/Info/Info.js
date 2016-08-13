import React from 'react';
import io from 'socket.io-client';

import Room from './Room';
import RoomList from './RoomList';
import User from './User';
import UserList from './UserList';

export default class Info extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      rooms: []
    }
  }

  componentDidMount(data){
    this.socket = io('/');
    this.socket.on('new user', data => {
      this.setState({ users: [...this.state.users, data] });
    })
    this.socket.on('new room', data => {
      this.setState({ rooms: [...this.state.rooms, data] });
    })
  }

  userSubmit = event => {
    const username = event.target.value
    if(event.keyCode === 13  && username){
      this.setState({ users: [...this.state.users, username] });
      this.socket.emit('new user', username)
      event.target.value = '';
    }
  }

  roomSubmit = event => {
    const room = event.target.value
    if(event.keyCode === 13  && room){
      this.setState({ rooms: [...this.state.rooms, room] });
      this.socket.emit('new room', room)
      event.target.value = '';
    }
  }

  render(){
    const rooms = this.state.rooms.map((room, index) => {
      return <li key={index}>{room}</li>
    })

    const users = this.state.users.map((user, index) => {
      return <li key={index}>{user}</li>
    })
    return(
      <div class="chat-info">
        <RoomList rooms={rooms}/>
        <Room roomSubmit={this.roomSubmit}/>

        <UserList users={users}/>
        <User userSubmit={this.userSubmit}/>
      </div>
    )
  }
}
