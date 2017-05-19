import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.messageReceived = this.messageReceived.bind(this);
    this.writeToWS = this.writeToWS.bind(this);
  }

  componentDidMount() {
    this.exampleSocket = new WebSocket("ws://localhost:3001/");
    this.exampleSocket.onmessage = this.messageReceived;
  }

  messageReceived(event) {
    console.log(event.data);
    this.setState(() => ({
      messages: event.data,
    }));
  }

  writeToWS() {
    this.exampleSocket.send("hello, world");
  }

  render() {
    return <div>
      <span>{this.state.messages}</span>
      <div onClick={this.writeToWS}>Write To ws</div>
    </div>;
  }
}


