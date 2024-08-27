import express, {  Request ,Response } from "express";
import dotenv from "dotenv";
import AppRouter from "../router";
import { ErrorHandler, InvalidAPI } from "../global-error";


dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json()); //to parse the request body


app.use("/orders", AppRouter);

app.use("/*", InvalidAPI); //to handle invalid requests

app.use(ErrorHandler); //to handle errors

export default (req: Request, res: Response) => {
    return new Promise<void>((resolve, reject) => {
      app(req, res);
      resolve();
    });
};

