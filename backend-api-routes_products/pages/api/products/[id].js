import { products } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    const product = products.find((product) => product.id === request.query.id);
    if (!product) {
      response.status(404).json({ message: "Product not found" });
    }
    response.json(product);
    return;
  } else {
    response.status(403).json({ message: "Method not allowed." });
  }
}
