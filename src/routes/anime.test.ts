import { app } from "../server";
import supertest, { Response } from "supertest";
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
  expected.id = 1;
  expect(response.body.anime).toMatchObject(expected);

  done();
});

it("post request to /anime/add with anime", async done => {
  const resp = await request.post("/anime/add").send({ title: "Mob Psycho 100 II", synopsis: "Shigeo \"Mob\" Kageyama is now maturing and understanding his role as a supernatural psychic that has the power to drastically affect the livelihood of others. He and his mentor Reigen Arataka continue to deal with supernatural requests from clients, whether it be exorcizing evil spirits or tackling urban legends that haunt the citizens. While the workflow remains the same, Mob isn't just blindly following Reigen around anymore. With all his experiences as a ridiculously strong psychic, Mob's supernatural adventures now have more weight to them. Things take on a serious and darker tone as the dangers Mob and Reigen face are much more tangible and unsettling than ever before. [Written by MAL Rewrite] This anime has Action, Slice of Life, Comedy, Supernatural." });
  expect(resp.status).toBe(200);

  const r2 = await request.get(`/anime/get/${encodeURIComponent("Mob Psycho 100 II")}`);
  expect(r2.status).toBe(200);

  done();
})

afterAll(async () => {
  await closeDB();
});


