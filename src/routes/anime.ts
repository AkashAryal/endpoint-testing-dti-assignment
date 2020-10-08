import express, { Router, Request, Response } from 'express';
import { getConnection } from "typeorm";
import { AnimeController } from '../typeORM/controller/AnimeController';
import { Anime } from '../typeORM/entity/Anime';

/* /anime */
let router: Router = express.Router();

router.get("/get/:anime", async function (req, res) {
  const animeName: string = decodeURIComponent(req.params.anime);
  console.log(animeName);

  const ac = new AnimeController(getConnection().manager);
  const anime = await ac.getAnimeByTitle(animeName);

  res.status(anime != null ? 200 : 400).json({ anime: anime });
});

router.post("/add", async (req: Request<{ title: string, synopsis: string }>,
  res: Response<{ id: number }>) => {
  const ac = new AnimeController(getConnection().manager);
  const addedId = await ac.addAnime(req.body.title, req.body.synopsis);

  res.status(200).json({ id: addedId });
});

export { router }

