const http = require("http");
const todos = [
  { id: 1, text: "todo 1" },
  { id: 2, text: "todo 2" },
  { id: 3, text: "todo 3" },
];
const server = http.createServer((req, res) => {
  //   const { headers, url, method } = req;
  //   console.log(headers, url, method);
  // res.statusCode = 400;
  // res.setHeader("Content-type", "application/json");
  // res.setHeader("X-powerd-by", "node.js");

  const { method, url } = req;

  let body = [];

  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      let status = 400;
      const response = {
        success: false,
        data: null,
      };

      if (method === "GET" && url === "") {
        status = 200;
        response.success = true;
        response.data = todos;
      }

      res.writeHeader(status, {
        "Content-Type": "application/json",
        "X-powerd-by": "node.js",
      });
      res.end(JSON.stringify(response));
    });
});
const PORT = 5000;

server.listen(PORT, () => console.log(`ok svr ${PORT}`));
