import { randomUUID } from "crypto";
import fileUpload, { UploadedFile } from "express-fileupload";
import express from "express";
import path from "path";
import checkCreateFolder from "../utils/checkCreateFolder";
import fs from "fs/promises";
import { createReadStream } from "fs";

const router = express.Router();

router.use(fileUpload());

router.get("/", async (req, res, next) => {
  try {
    const filePath = path.resolve(
      "data",
      req.get("userFolder") as string,
      req.get("fileName") as string
    );

    const stat = await fs.stat(filePath);
    const fileSize = stat.size;
    const fileMime = req.get("fileMime");

    res.writeHead(200, {
      "Content-Type": fileMime,
      "Content-Length": fileSize,
    });

    const stream = createReadStream(filePath);
    stream.pipe(res);
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

    const fileName = randomUUID() + format;
    const filePath = path.resolve("data", folder, fileName);

    await file.mv(filePath);
    res.status(201).json({ fileName });
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const fileName = req.get("fileName") as string;
    const filePath = path.resolve(
      "data",
      req.get("userFolder") as string,
      fileName
    );
    await fs.unlink(filePath);
    res.json({ fileName });
  } catch (error) {
    next(error);
  }
});

export default router;
