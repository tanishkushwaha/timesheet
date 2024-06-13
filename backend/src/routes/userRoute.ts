import { Router } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";

const router = Router();

type DataType = {
  username: string;
  password: string;
};

router.post("/", async (req, res) => {
  try {
    const data: DataType = req.body;

    // Validate data
    if (!data.username || !data.password) {
      return res.status(400).send({
        message: "Send all the required fields: username, password.",
      });
    }

    // Check for existing user
    const existingUser = await User.findOne({ username: data.username });
    if (existingUser) {
      return res.status(409).send({ message: "User already exists." });
    }

    // Hash password
    const encPass = await bcrypt.hash(data.password, 10);

    // Save into DB
    await User.create({
      ...data,
      password: encPass,
    });

    return res.status(200).send({ message: "User registered successfully!" });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      return res.status(500).send({ message: err.message });
    }
  }
});

export default router;
