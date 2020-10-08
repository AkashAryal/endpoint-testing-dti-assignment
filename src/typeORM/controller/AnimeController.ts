import { EntityManager } from 'typeorm';
import { Anime } from '../entity/Anime';

export class AnimeController {
  manager: EntityManager;

  constructor(entityMan: EntityManager) {
    this.manager = entityMan;
  }

  async addAnime(title: string, syn: string) {
    const anime = new Anime();
    anime.synopsis = syn;
    anime.title = title;

    const animeWithID = await this.manager.save(anime);
    return animeWithID.id;
  }

  async getAnimeByTitle(title): Promise<Anime> {
    this.manager.findOneOrFail(Anime, { title: title })
      .then((a: Anime) => { return a })
      .catch(() => { return null });
    return null;
  }

}
