import { randomUUID } from "crypto";
import fileUpload from "express-fileupload";
import express from "express";
import path from "path";
import { writeFile } from "fs/promises";
import checkCreateFolder from "../utils/checkCreateFolder";

const router = express.Router();

router.use(fileUpload());

router.get("/:id", async (_req, res) => {
  res.send("COOL GET");
});

router.post("/", async (req, res) => {
  try {
    const file = req.body.file;
    const folder = req.body.folder;
    const format = req.body.format;

    if (!file || !folder || !format) {
      throw new Error("Missing file/folder/format");
    }

    if (!(await checkCreateFolder(path.resolve("data", folder)))) {
      throw new Error("Cant access user folder");
    }

    const filePath = path.resolve(
      path.join("data", folder, randomUUID() + format)
    );

    await writeFile(filePath, file, { encoding: "base64" });
    res.status(201).json({ filePath });
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
});

router.delete("/:id", async (_req, res) => {
  res.send("COOL DELETE");
});

export default router;
