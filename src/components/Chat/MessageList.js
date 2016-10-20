import React from 'react';

export default class MessageList extends React.Component {
  render(){
    return(
      <ul id="message">{this.props.messages}</ul>
    )
  }
}
