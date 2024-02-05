import { products } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json(products);
  } else {
    response.status(403).json({ method: "Method not allowed." });
  }
}
