import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
      // eslint-disable-next-line react/no-unused-state
      input: '',
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  changeState = (message) => {
    this.messages = this.state.messages.concat(message);
    this.setState({
      messages: this.messages,
    });
  };

  changeInput = (input) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ input });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput
          onStateChanged={this.changeState}
          answers={answersData}
          onInputchanged={this.changeInput}
        />
      </main>
    );
  }
}

export default Chat;
