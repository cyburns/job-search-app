import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routers.js";

const app = express();

app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

app.get("/", router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
