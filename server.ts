import { fastify } from "fastify";

const server = fastify();

const { SECRET_A, SECRET_B, SECRET_C } = process.env;
const secrets = { SECRET_A, SECRET_B, SECRET_C };

server.get("/", async () => "RUNNING");

server.get("/health", async () => "ok");

server.get(
  "/env",
  { schema: { querystring: { key: { type: "string" } } } },
  async (req) => {
    const { key } = req.query as { key: string };
    return secrets[key] || "Secret not found";
  },
);

server.listen({
  port: 3000,
  host: "::",
  listenTextResolver: (address) => `fastify started on ${address}`,
});
