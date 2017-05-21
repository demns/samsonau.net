import React, { Component } from 'react';

export default class DynamicLinks extends Component {
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
    this.setState(() => ({
      messages: this.state.messages + event.data,
    }));
  }

  writeToWS() {
    // <div onClick={this.writeToWS}>Write To ws</div>
    this.exampleSocket.send("hello, world");
  }

  render() {
    return <div className="samsonau__links">
      <span dangerouslySetInnerHTML={{ __html: this.state.messages }}></span>
    </div>;
  }
}
