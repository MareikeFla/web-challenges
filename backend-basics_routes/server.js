import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1" || request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end(request.url === "/api/fish/1" ? "Schrimp" : "Anemonefish");
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
