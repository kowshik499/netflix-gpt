import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import { AppDataSource } from "./config/database.ts";
import { User } from "./models/user.ts";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await AppDataSource.getRepository(User).find();

    res.status(200).json(users);

  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await AppDataSource.getRepository(User).findOneBy({ id: parseInt(id) });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  try{
    const { username, email, password, fullName } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = AppDataSource.getRepository(User).create({
      username,
      email,
      passwordHash,
      fullName,
      createdAt: new Date(),
    });

    await AppDataSource.getRepository(User).save(user);
    res.status(201).json({ message: "User created successfully", user });

  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await AppDataSource.getRepository(User).findOneBy({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error during login", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    
    console.log("Connected to the database");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
}

startServer();