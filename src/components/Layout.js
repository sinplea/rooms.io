import React from 'react';
import io from 'socket.io-client';

import Chat from './Chat/Chat';
import Info from './Info/Info';

const socket = io();

export default class Layout extends React.Component {
  render(){
    return(
      <div class="wrapper">
        <h1 class="title">Rooms.io!</h1>
        <Chat socket={socket}/>
        <Info socket={socket}/>
      </div>
    )
  }
}
