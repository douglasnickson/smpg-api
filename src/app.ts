import express from 'express';
import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
