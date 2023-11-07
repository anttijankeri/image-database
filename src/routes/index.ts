import express from "express";
import auth from "./auth";
import users from "./users";
import objects from "./objects";

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/objects", objects);

export default router;
