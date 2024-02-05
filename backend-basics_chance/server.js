import { createServer } from "node:http";
import Chance from "chance";
const chance = new Chance();
const name = chance.name();
const age = chance.age();
const profession = chance.profession();

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(name + " " + age + " " + profession);
});
