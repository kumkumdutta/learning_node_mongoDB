import {
  SearchData,
  createData,
  deleteData,
  getData,
  getDatabyKey,
  updateData,
} from "../controller/controller.js";

export default async function routes(fastify, options) {
  fastify.post("/add", createData);
  fastify.get("/data", getData);
  fastify.get("/data/search", getDatabyKey);
  fastify.get('/data/searchby/:pattern',SearchData)

  fastify.delete("/delete/:id", deleteData);
  fastify.put("/update/:id", updateData);
}
