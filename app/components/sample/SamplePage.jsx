// @flow
import * as React from 'react';
import { connect } from 'react-redux';

const Sample = ({ messages }: {messages: MessageType[]}) => {

  const messagesLayout = messages.map((message, index) => <div key={message._id}>{message.text}</div>);

  return (<div>hola mundo from feathers {messagesLayout}</div>);
};

function mapStateToProps(state: StoreStateType, OwnProps) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(Sample);