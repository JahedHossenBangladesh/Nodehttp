const http = require("http");
const todos = [
  { id: 1, text: "todo 1" },
  { id: 2, text: "todo 2" },
  { id: 3, text: "todo 3" },
];
const server = http.createServer((req, res) => {
  //   const { headers, url, method } = req;
  //   console.log(headers, url, method);
  res.setHeader("Content-type", "application/json");
  res.setHeader("X-powerd-by", "node.js");

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});
const PORT = 5000;

server.listen(PORT, () => console.log(`ok svr ${PORT}`));
