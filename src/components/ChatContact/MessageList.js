import React from 'react';

export default class MessageList extends React.Component {
  render(){
    return(
      <ul>{this.props.messages}</ul>
    )
  }
}
