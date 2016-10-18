// @flow
import io from 'socket.io-client/socket.io';
import feathers from 'feathers-client';

const socket = io();

let app = feathers();

app.configure(feathers.socketio(socket));

const messages = app.service('messages');

export default messages;