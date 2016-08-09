import React from 'react';

import Contact from './ChatContact/Contact';
import Info from './ChatInfo/Info';

export default class Layout extends React.Component {
  render(){
    return(
      <div class="wrapper">
        <h1>Rooms.io!</h1>
        <Contact />
        <Info />
      </div>
    )
  }
}
