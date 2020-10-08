import { EntityManager } from 'typeorm';
import { Anime } from '../entity/Anime';

export class AnimeController {
  manager: EntityManager;

  constructor(entityMan: EntityManager) {
    this.manager = entityMan;
  }

  async addAnime(title: string, syn: string) {
    if (await this.getAnimeByTitle(title) != null) return -1;

    const anime = new Anime();
    anime.synopsis = syn;
    anime.title = title;

    const animeWithID = await this.manager.save(anime);
    return animeWithID.id;
  }

  async getAnimeByTitle(title): Promise<Anime> {
    try {
      return await this.manager.findOneOrFail(Anime, { title: title })
    } catch (e) {
      return null;
    }
  }

}
