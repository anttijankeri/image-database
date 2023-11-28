import { randomUUID } from "crypto";
import fileUpload from "express-fileupload";
import express from "express";
import path from "path";
import { writeFile } from "fs/promises";

const router = express.Router();

router.use(fileUpload());

router.get("/:id", async (_req, res) => {
  res.send("COOL GET");
});

router.post("/", async (req, res) => {
  try {
    const file = req.body.file;
    const fileFormat = req.body.fileFormat;
    if (!file) {
      throw new Error("Missing file");
    }

    const filePath = path.resolve(path.join("data", randomUUID() + fileFormat));

    await writeFile(filePath, file, { encoding: "base64" });
    res.status(201).json({ filePath });
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to save file");
  }
});

router.delete("/:id", async (_req, res) => {
  res.send("COOL DELETE");
});

export default router;
