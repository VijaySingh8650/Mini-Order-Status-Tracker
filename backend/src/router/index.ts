import { getOrders } from "../controller";
import express ,{Response, Request} from "express";

const app = express.Router();

app.route("/").get(getOrders);


export default app;
