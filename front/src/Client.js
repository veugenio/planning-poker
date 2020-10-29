import socketIOClient from "socket.io-client";

const Client = socketIOClient('http://127.0.0.1:4000');

export default Client;
