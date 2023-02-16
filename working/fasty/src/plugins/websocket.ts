// import fp from "fastify-plugin";
// import websocket from "@fastify/websocket";

// export default fp<any>(async (fastify) => fastify.register(websocket, {}));

import fp from "fastify-plugin";
import websocket from "fastify-socket.io";

export default fp<any>(async (fastify) => fastify.register(websocket, {}));
