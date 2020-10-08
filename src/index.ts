import { PORT, app } from "./server";
import { initDB } from "./typeORM";
import { AnimeController } from "./typeORM/controller/AnimeController";
import { getConnection } from "typeorm";

app.listen(PORT, async function () {
  await initDB();
  const ac = new AnimeController(getConnection().manager);
  //console.log(await ac.getAnimeByTitle("title"));
  console.log(`App listening on port ${PORT}!`);
});
