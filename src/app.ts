import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";

import indexRouter from "./routes/index";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());

app.use("/", indexRouter);

export default app;
