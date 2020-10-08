import express, { Router, Request, Response } from 'express';
/* /anime */
let router: Router = express.Router();

router.get("/get/:anime", function (req: Request, res: Response) {
  const animeName: string = req.params.anime;

  res.json({ message: 'pass!' })
});

