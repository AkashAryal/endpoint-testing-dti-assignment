import { app } from "../server";
import supertest, { Response } from "supertest";
import { Anime } from "../typeORM/entity/Anime";
import { initDB, closeDB } from "../typeORM/index";
import { anime } from "../populateDB";

const request = supertest(app);

beforeAll(async () => {
  await initDB();
});

it('get request to /anime/get/:anime with anime that does not exist in db', async done => {
  const response = await request.get(`/anime/get/animethatdoesnotexist`);

  expect(response.status).toBe(400);
  expect(response.body.anime).toBe(null);

  done()
});

it("get request to /anime/get/:anime with re zero", async done => {
  const response = await request.get(`/anime/get/${encodeURIComponent("Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season")}`)

  expect(response.status).toBe(200);

  const expected = anime[0];
  expected.id = 13;
  expect(response.body.anime).toMatchObject(expected);

  done();
})

afterAll(async () => {
  await closeDB();
});


