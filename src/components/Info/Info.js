import React from 'react';

import Room from './Room';
import RoomList from './RoomList';
import User from './User';
import UserList from './UserList';

export default class Info extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      rooms: [],
      currentRoom: '',
      username: '',
      hasUsername: false
    }
  }

  componentDidMount(){
    const socket = this.props.socket;
    //set defaults for room list
    socket.on('setup', data => {
      this.setState({ currentRoom: data.currentRoom });
    })
    socket.on('new room', room => {
      this.setState({ currentRoom: room });
    })
    socket.on('new user', username => {
      this.setState({ username: username });
    })
  }

  userSubmit = event => {
    const socket = this.props.socket;
    const username = event.target.value;
    if(event.keyCode === 13  && username){
      this.setState({ users: [...this.state.users, username] });
      socket.emit('new user', username)
      event.target.value = '';
      this.setState({ hasUsername: true });
    }
  }

  roomSubmit = event => {
    const socket = this.props.socket;
    const room = event.target.value
    if(event.keyCode === 13  && room){
      this.setState({ rooms: [...this.state.rooms, room] });
      socket.emit('new room', room)
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
      <div class="chat-info col2">
        <RoomList rooms={rooms}/>
        <Room roomSubmit={this.roomSubmit}/>

        <UserList users={users}/>
        {this.state.hasUsername ? <p>Username: {this.state.username}</p> : <User userSubmit={this.userSubmit}/>}
        <p>Current Room: {this.state.currentRoom}</p>
      </div>
    )
  }
}
