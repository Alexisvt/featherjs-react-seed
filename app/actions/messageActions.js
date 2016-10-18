// @flow

export function newMessage(message: MessageType): newMessageActionType {
  return {
    message: message,
    type: 'NEW_MESSAGE'
  };
}

export function getMessages(): GetMessagesActionType {
  return {
    type: 'GET_MESSAGES'
  };
}