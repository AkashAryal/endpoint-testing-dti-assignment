import "reflect-metadata";
import { createConnection } from "typeorm";

export async function initDB() {
  await createConnection().then(async connection => {
    console.log("connected to db");
  }).catch(error => console.log(error));
}
