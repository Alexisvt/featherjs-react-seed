// @flow
import initialState from './initialState';

export function messageReducer (state: MessageStateType = initialState.messages, action: newMessageActionType): MessageStateType {
  
  switch (action.type) {
    case 'GET_MESSAGES': 
      return state;
    case 'NEW_MESSAGE':
      return [...state, {...action.message}];
  }

  return state;
}