import express, { Router, Request, Response } from 'express';
import { getConnection } from "typeorm";
import { AnimeController } from '../typeORM/controller/AnimeController';
import { Anime } from '../typeORM/entity/Anime';

/* /anime */
let router: Router = express.Router();

router.get("/get/:anime", async function (req: Request<{ anime: string, title: string }>, res: Response<{ anime: Anime }>) {
  const animeName: string = req.params.anime;
  const ac = new AnimeController(getConnection().manager);
  const anime = await ac.getAnimeByTitle(req.params.title);

  res.status(anime ? 200 : 400).json({ anime: anime });
});

export { router }

