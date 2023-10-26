const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => console.log(data)); // ES6 shorthand for arrow function

  return conn;
};

module.exports = {connect};