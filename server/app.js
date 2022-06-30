import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import dbConnection from "./dbConnection/db.js";
import Routes from "./routes/route";

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL }));

//db connection
const Local_URL = process.env.LOCAL_URL;
dbConnection(Local_URL);

//routes
app.use("/", Routes);

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Server running on port:${port}`));
