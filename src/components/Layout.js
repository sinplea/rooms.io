import React from 'react';

import Chat from './Chat/Chat';
import Info from './Info/Info';

export default class Layout extends React.Component {
  render(){
    return(
      <div class="wrapper">
        <h1>Rooms.io!</h1>
        <Chat />
        <Info />
      </div>
    )
  }
}
