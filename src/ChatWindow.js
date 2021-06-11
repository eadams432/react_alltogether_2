import React, { Component } from 'react';
import MessageBox from './MessageBox';

class ChatWindow extends Component{
  
  render(){
    const messages = this.props.messages;
    const username = this.props.user.username;
  	return(
       <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
			<MessageBox handleMessage={this.props.handleMessage} postingUser={username}/>         
          </div>
    );
  }
}

export default ChatWindow;