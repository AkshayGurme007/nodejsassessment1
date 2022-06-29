const http = require("http");
const server = http.createServer(function (req, res) {
  res.write("<h1>This is Our Frist Server</h1>");
  res.write("Hello...!!!");
  res.write(JSON.stringify({ Name: "Akshay" }));
  res.end();
});
server.listen(5000);
