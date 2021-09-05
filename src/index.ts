import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ToDo } from "./entities/ToDo";
import { ToDoResolver } from "./resolvers/todo";

(async () => {
  await createConnection({
    type: "postgres",
    synchronize: true,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [ToDo],
  });

  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ToDoResolver],
      validate: false,
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server started on ${port}`);
  });
})();
