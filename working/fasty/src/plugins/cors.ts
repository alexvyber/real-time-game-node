import fp from "fastify-plugin";
import cors, { type FastifyCorsOptions } from "@fastify/cors";

export default fp<FastifyCorsOptions>(async (fastify) => {
  fastify.register(cors, {
    origin: true,
  });
});
