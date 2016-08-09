import React from 'react';

import RoomList from './RoomList';
import UserList from './UserList';

export default class Info extends React.Component {
  render(){
    return(
      <div class="chat-info">
        <RoomList />
        <UserList />
      </div>
    )
  }
}
