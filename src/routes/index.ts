import express from "express";

import auth from "./auth";
import images from "./images";

const router = express.Router();

router.use("/auth", auth);
router.use("/images", images);

export default router;
