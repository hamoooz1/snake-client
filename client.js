const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding("utf8");
  
  //shows connection went through
  conn.on("connect", () => {
    console.log( "Successfully connected to game server")
  })

  //taking message from server
  conn.on("data", (data) => console.log(data));

  //put a name
  conn.on("connect", () => {
    conn.write("Name: HRK");
  });
  
  conn.on("connect", () => {
    conn.write("Move: down");
  }); 
  return conn;  
};

module.exports = {connect};