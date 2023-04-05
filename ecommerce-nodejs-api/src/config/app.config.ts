import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createConnection } from "typeorm";
import { typeOrmConfig } from "./database.config";
import {UserController} from "../controllers/user.controller";


class App {
  private app: Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
  }

  private routes() {
    this.app.use("/api", new UserController().router);
  }

  public listen() {
    createConnection(typeOrmConfig)
      .then(() => {
        console.log("Database connected");
        this.app.listen(process.env.APP_PORT || 3000, () => {
          console.log(`Server running on port ${process.env.APP_PORT || 3000}`);
        });
      })
      .catch((error) => console.log(error));
  }
}

export default new App();
