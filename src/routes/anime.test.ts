import { app } from "../server";
import supertest, { Response } from "supertest";
import { Anime } from "../typeORM/entity/Anime";
import { initDB } from "../typeORM/index";

const request = supertest(app);

beforeAll(async () => {
  await initDB();
});

it('get request to /anime/get/:anime with anime that does not exist in db', async done => {
  const response = (await request.get(`/anime/get/animethatdoesnotexist`));

  expect(response.status).toBe(400);
  expect(response.body.anime).toBe(null);

  done()
});


