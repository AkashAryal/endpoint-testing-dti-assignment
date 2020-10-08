import { EntityManager } from 'typeorm';
import { Anime } from '../entity/Anime';

export class AnimeController {
  manager: EntityManager;

  constructor(entityMan: EntityManager) {
    this.manager = entityMan;
  }

  async addAnime(title, syn) {
    const anime = new Anime();
    anime.synopsis = syn;
    anime.title = title;

    const animeWithID = await this.manager.save(anime);
    return animeWithID.id;
  }

}
