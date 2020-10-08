import { app } from "../server";
import supertest from "supertest";

const request = supertest(app);

it('Gets the test endpoint', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/baseTest/');

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  // ...
  done()
})
