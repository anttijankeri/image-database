import { randomUUID } from "crypto";
import express from "express";
import path from "path";
import { writeFile } from "fs/promises";

const router = express.Router();

router.get("/:id", async (_req, res) => {
  res.send("COOL GET");
});

router.post("/", async (req, res) => {
  try {
    const file = req.body as Buffer;

    const filePath = path.resolve(path.join("..", "..", "data", randomUUID()));

    await writeFile(filePath, file, { encoding: "binary" });

    res.json({ filePath });
  } catch (error) {
    res.status(500).send("Failed to save file");
  }
});

router.delete("/:id", async (_req, res) => {
  res.send("COOL DELETE");
});

export default router;
