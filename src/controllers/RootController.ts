import { Request, Response } from "express";

class RootController {
  public index(req: Request, res: Response): void {
    res.render("index");
  }
}

export default new RootController();
