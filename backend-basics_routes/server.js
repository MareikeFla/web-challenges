import { createServer } from "node:http";

export const server = createServer((request, response) => {
  console.log("Test");
  response.end("Hello");
});
