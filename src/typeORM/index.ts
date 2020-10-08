import "reflect-metadata";
import { createConnection, getConnection } from "typeorm";

export const initDB = async () => {
  await createConnection().then(async connection => {
    console.log("connected to db");
  }).catch(error => console.log(error));
}

export const closeDB = async () => {
  await getConnection().close();
}

