import React from 'react';

export default class Message extends React.Component {

  render(){
    return(
      <input
        type="text"
        placeholder="Type here..."
        onKeyUp={this.props.handleSubmit}/>
    )
  }
}
