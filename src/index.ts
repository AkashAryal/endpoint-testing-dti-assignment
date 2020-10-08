import { PORT, app } from "./server";
import { initDB } from "./typeORM";

app.listen(PORT, async function () {
  await initDB();
  console.log(`App listening on port ${PORT}!`);
});
