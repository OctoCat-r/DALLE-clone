import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";
import DalleRoutes from "./routes/DalleRoutes.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from open AI");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has been started on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

app.use("api/v1/post", postRoutes);
app.use("/api/v1/dalle", DalleRoutes);

startServer();
