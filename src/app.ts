import express from "express";
import path from "path";
import { AppDataSource } from "./database/data_source";
import root from "./routes/root";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.views();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.urlencoded({ extended: false }));
  }

  private database(): void {
    AppDataSource.initialize();
  }

  private views(): void {
    this.express.set("views", path.join(__dirname, "views"));
    this.express.set("view engine", "pug");
  }

  private routes(): void {
    this.express.use("/", root);
  }
}

export default new App().express;
