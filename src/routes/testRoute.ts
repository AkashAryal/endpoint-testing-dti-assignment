import express, { Router, Request } from 'express';
/* /baseTest */
let router: Router = express.Router();

router.get("/", function (req: any, res) {
  res.json({ message: 'pass!' })
});

export { router }
