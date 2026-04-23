// 1. Import the 'http' module (built into Node.js)
const http = require("http");

// 2. Configure the server logic
const server = http.createServer((req, res) => {
  // req = the Request (what the user asks for)
  // res = the Response (what we send back)

  res.statusCode = 200; // Success code
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello! You just reached a Node.js server.");
});

// 3. Tell the server to "listen" for visitors on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
