import express, { Router, Request, Response } from 'express';
import { getConnection } from "typeorm";
import { AnimeController } from '../typeORM/controller/AnimeController';
import { Anime } from '../typeORM/entity/Anime';

/* /anime */
let router: Router = express.Router();

router.get("/get/:anime", async function (req: Request<{ anime: string, title: string }>, res: Response<{ anime: Anime }>) {
  const animeName: string = decodeURIComponent(req.params.anime);
  console.log(animeName);

  const ac = new AnimeController(getConnection().manager);
  const anime = await ac.getAnimeByTitle(animeName);

  res.status(anime != null ? 200 : 400).json({ anime: anime });
});

export { router }

