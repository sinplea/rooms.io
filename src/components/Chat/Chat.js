import React from 'react';

import Message from './Message';
import MessageList from './MessageList';

export default class Chat extends React.Component {
  constructor(){
    super();
    this.state = { messages: [] };
  }

  componentDidMount(){
    const socket = this.props.socket;
    socket.on('message', message => {
      this.setState({ messages: [...this.state.messages, message] });
    })
    socket.on('user left', message => {
      this.setState({ messages: [...this.state.messages, message] });
    })
    socket.on('user joined', message => {
      this.setState({ messages: [...this.state.messages, message] });
    })
  }

  handleSubmit = event => {
    const socket = this.props.socket;
    const body = event.target.value
    if(event.keyCode === 13  && body){
      const message = {
        body,
        from: 'Me'
      }
      this.setState({ messages: [...this.state.messages, message] });
      socket.emit('message', body)
      event.target.value = '';
    }
  }

  render(){
    const messages = this.state.messages.map((message, index) => {
      return <li key={index}>{message.from}: {message.body}</li>
    })
    return(
      <div class="chat col1">
        <MessageList messages={messages}/>
        <Message handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
