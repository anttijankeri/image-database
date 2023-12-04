import { randomUUID } from "crypto";
import fileUpload, { UploadedFile } from "express-fileupload";
import express from "express";
import path from "path";
import checkCreateFolder from "../utils/checkCreateFolder";
import fs from "fs/promises";
import { createReadStream } from "fs";

const router = express.Router();

router.use(fileUpload());

router.get("/:id", async (req, res, next) => {
  try {
    const filePath = path.resolve("data", req.headers.filePath as string);
    const stream = createReadStream(filePath);
    stream.pipe(res);
    stream.on("end", () =>
      res
        .set({
          "Content-Type": "image/png",
          "Content-Length": stream.readableLength,
        })
        .send()
    );
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const file = req.files?.file as UploadedFile;
    const folder = req.body.folder;
    const format = req.body.format;

    if (!file || !folder || !format) {
      throw new Error("Missing file/folder/format");
    }

    if (!(await checkCreateFolder(path.resolve("data", folder)))) {
      throw new Error("Cant access user folder");
    }

    const filePath = path.join(folder, randomUUID() + format);
    const realFilePath = path.resolve("data", filePath);

    await file.mv(realFilePath);
    res.status(201).json({ filePath });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const filePath = req.headers.filePath as string;
    const realFilePath = path.resolve("data", filePath);
    await fs.unlink(realFilePath);
    res.json({ filePath });
  } catch (error) {
    next(error);
  }
});

export default router;
