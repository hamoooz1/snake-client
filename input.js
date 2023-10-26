const net = require("net");
const {connect} = require("./client");

let connection = connect();

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);


  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  data = data.trim();

  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
  } 
  if (data === 'd') {
    connection.write('Move: right');
  } 
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
};

module.exports = {setupInput};