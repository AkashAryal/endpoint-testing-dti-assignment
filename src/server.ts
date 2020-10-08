import express, { Request, Response } from "express";
import cors from 'cors';
import cookieParse from 'cookie-parser';
import { router as testRouter } from "./routes/testRoute";
import { router as animeRouter } from "./routes/anime";

export const app: express.Application = express();

export const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParse());

app.use("/baseTest", testRouter);
app.use("/anime", animeRouter);

