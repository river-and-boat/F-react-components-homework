import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleSubmit = () => {
    const customerMessage = [{ text: this.state.input, role: ROLE.CUSTOMER }];
    let reply = this.props.answers.find((answer) => answer.tags.includes(this.state.input));
    if (!reply) {
      reply = { text: '对不起，您说什么我听不懂，但是我觉得您说得很对', role: ROLE.ROBOT };
    }
    customerMessage.push(reply);
    this.props.onStateChanged(customerMessage);
    this.setState({
      input: '',
    });
  };

  inputOnChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    this.props.onInputchanged(event.target.value);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.inputOnChange} value={this.state.input} />
        <button type="button" onClick={this.handleSubmit}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
