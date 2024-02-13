import dbConnect from "@/db/connect";
import Fish from "@/db/models/Fish";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    const fish = await Fish.findById(id);
    return response.status(200).json(fish);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
