import express, { Request, Response } from "express";
import userRoute from "./routes/userRoute";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoute);

app.get("/api/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("DB Connected!");
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
