import express from "express";
import auth from "./auth";
import users from "./users";
import objects from "./objects";

const router = express.Router();

router.use(auth);
router.use(users);
router.use(objects);

export default router;
