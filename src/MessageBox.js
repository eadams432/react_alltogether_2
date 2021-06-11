import React, { Component } from 'react';


class MessageBox extends Component{
  
  state = {
  	username: this.props.postingUser,
    text: ''
  }
 
  handleInput = (event) => {
    event.preventDefault();
  	this.setState({
    	text : event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
  	this.props.handleMessage(this.state);
  }
  
  isDisabled = () => {
    return !this.state.text ? true : false;
  };
  
  render(){
  	return(
    	<div>
            <form className="input-group" onSubmit={this.handleSubmit}>
              <input type="text" 
              className="form-control" 
              placeholder="Enter your message..." 
              value={this.state.newMessage}
              onChange={this.handleInput}
              />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={this.isDisabled()}>
                 SEND
                </button>
              </div>
            </form>
		</div>
    );
  }

}

export default MessageBox;