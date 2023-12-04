import { randomUUID } from "crypto";
import fileUpload, { UploadedFile } from "express-fileupload";
import express from "express";
import path from "path";
import checkCreateFolder from "../utils/checkCreateFolder";

const router = express.Router();

router.use(fileUpload());

router.get("/:id", async (_req, res, next) => {
  try {
    res.send("COOL GET");
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

    const filePath = path.resolve(
      path.join("data", folder, randomUUID() + format)
    );

    await file.mv(filePath);
    res.status(201).json({ filePath });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (_req, res, next) => {
  try {
    res.send("COOL DELETE");
  } catch (error) {
    next(error);
  }
});

export default router;
