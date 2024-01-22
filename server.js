import Fastify from "fastify";
import routes from "./routes/routes.js";
import { db } from "./config/db.js";



const fastify = Fastify({
  // logger: true,
});
fastify.register(routes)

global.db = db

const PORT = 3000;
fastify.listen(PORT, "0.0.0.0", (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
