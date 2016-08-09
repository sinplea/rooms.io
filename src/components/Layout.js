import React from 'react';

import Message from './Message';
import MessageList from './MessageList';
import RoomList from './RoomList';
import UserList from './UserList';

export default class Layout extends React.Component {
  render(){
    return(
      <div class="wrapper">
        <div class="chat-contact">
          <h1>Rooms.io!</h1>
          <MessageList />
          <Message />
        </div>

        <div class="chat-info">
          <UserList />
          <RoomList />
        </div>
      </div>
    )
  }
}
