import http from "http";
import url from "url";
import fs from "fs/promises";
import path from "path";

// get Curretn page


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {

  try {
    if (req.method == "GET") {
      if (req.url === "/") {
        res.writeHead(200, {
          "Content-Type": "text/html"
        })
        res.end("<h1>Home Page</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, {
          "Content-Type": "text/html"
        })
        res.end("<h1>About Page</h1>");
      }
      else {
        res.writeHead(404, {
          "Content-Type": "text/html"
        })
        res.end("<h1>Not Found</h1>");
      }
    } else {
      throw new Error("not found")
    }
  } catch (error) {
    res.writeHead(500, {
      "Content-Type": "text/plain"
    })
    res.end("server error");
  }

})

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})