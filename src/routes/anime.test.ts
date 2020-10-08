import { app } from "../server";
import supertest from "supertest";

const request = supertest(app);

it('get request to /anime/get/:anime with anime that does not exist in db', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/baseTest/');

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  // ...
  done()
})
