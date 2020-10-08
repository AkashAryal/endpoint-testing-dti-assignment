import { getConnection } from "typeorm";
import { AnimeController } from "./typeORM/controller/AnimeController";
import { Anime } from "./typeORM/entity/Anime";
import { initDB } from "./typeORM";

export const anime: Anime[] = [
  {
    title: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
    synopsis: "Even after dying countless times, Subaru finally ended the threat of the White Whale and defeated the Witch Cult's Sin Archbishop representing sloth, Petelgeuse Romaneeconti. But only shortly after overcoming a tragic ending and reuniting with his beloved Emilia, Subaru learns that Rem has been erased from this world, having fallen victim to the White Whale's Fog of Elimination in the midst of Subaru's death loop. With the White Whale now gone, Subaru and Emilia are forced to confront a reality they never dreamed would happen. (Source: Crunchyroll) This anime has Drama, Fantasy, Psychological, Thriller."
  },
  {
    title: "Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen",
    synopsis: "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions into September, Miyuki Shirogane's birthday looms ever closer, leaving Kaguya Shinomiya in a serious predicament as to how to celebrate it. Furthermore, the tenure of the school's 67th student council is coming to an end. Due to the council members being in different classes, the only time Kaguya and Miyuki have to be together will soon disappear, putting all of their cunning plans at risk. A long and difficult election that will decide the fate of the new student council awaits, as multiple challengers fight for the coveted title of president. [Written by MAL Rewrite] This anime has Comedy, Psychological, Romance, School, Seinen."
  }
];

const populate = async () => {
  await initDB();
  const ac = new AnimeController(getConnection().manager);
  await Promise.all(anime.map(async a => {
    return await ac.addAnime(a.title, a.synopsis);
  }));
  console.log("done");
};

populate();

