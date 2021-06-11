import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  
  state = {
  	messages: []
  }
  
  addMessage = (message) => {
  	this.setState(prevState => ({
    	messages: [...prevState.messages, message]
    }));
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
        <ChatWindow user={users[0]} handleMessage={this.addMessage} messages={this.state.messages}/>
		<ChatWindow user={users[1]} handleMessage={this.addMessage} messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default App;
