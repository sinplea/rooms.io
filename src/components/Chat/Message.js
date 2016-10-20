import React from 'react';

export default class Message extends React.Component {

  render(){
    return(
      <input
        id="chatbox"
        type="text"
        placeholder="Type here..."
        onKeyUp={this.props.handleSubmit}/>
    )
  }
}
