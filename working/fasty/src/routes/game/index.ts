// import { SocketStream } from "@fastify/websocket";
import {
  FastifyPluginAsync,
  //
  // FastifyRequest,
} from "fastify";
// import { UserData } from "../../entities/user"
// import { authorizeUser } from "../../utils/authorize"
// import { login } from "../../utils/login"

const loginUser: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.register(async (fastify) => {
  //   fastify.get(
  //     "/",
  //     //  (request, reply) => {
  //     // console.log("aaaaaaaaaaaaa");
  //     // reply.send({ shit: 123123 });
  //     // console.log("🚀 ~ //fastify.register ~ fastify.io", fastify.io);
  //     // fastify.io.emit("hello");
  //     // });
  //     { websocket: true },
  //     (connection, _request) => {
  //       // setInterval(
  //       //   () => connection.socket.emit("message", "aaaaaaaaaaaaaaaaaaaa"),
  //       //   1000
  //       // );

  //       connection.socket.on("ping", (data) => {
  //         console.log("🚀 ~ fastify.register ~ data", data);
  //         return;
  //       });

  //       connection.socket.on("message", async (message) => {
  //         console.log("🚀 ~ connection.socket.on ~ message", message);
  //         fastify.websocketServer.clients.forEach((client) => {
  //           try {
  //             if (client.readyState === 1) {
  //               client.send(message.toString());
  //             }
  //           } catch (error) {
  //             fastify.log.error({
  //               error,
  //             });
  //           }
  //         });
  //       });
  //     }
  //   );
  // });

  fastify.register(async (fastify) => {
    fastify.get(
      "/",
      //  (request, reply) => {
      // console.log("aaaaaaaaaaaaa");
      // reply.send({ shit: 123123 });
      // console.log("🚀 ~ //fastify.register ~ fastify.io", fastify.io);
      // fastify.io.emit("hello");
      // });
      { websocket: true },
      (connection, _request) => {
        // setInterval(
        //   () => connection.socket.emit("message", "aaaaaaaaaaaaaaaaaaaa"),
        //   1000
        // );

        connection.socket.on("ping", (data) => {
          console.log("🚀 ~ fastify.register ~ data", data);
          return;
        });

        connection.socket.on("message", async (message) => {
          console.log("🚀 ~ connection.socket.on ~ message", message);
          fastify.websocketServer.clients.forEach((client) => {
            try {
              if (client.readyState === 1) {
                client.send(message.toString());
              }
            } catch (error) {
              fastify.log.error({
                error,
              });
            }
          });
        });
      }
    );
  });
};

export default loginUser;
