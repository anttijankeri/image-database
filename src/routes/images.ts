import express from "express";

const router = express.Router();

router.get("/:id", async (_req, res) => {
  res.send("COOL GET");
});

router.post("/", async (_req, res) => {
  res.send("COOL POST");
});

router.delete("/:id", async (_req, res) => {
  res.send("COOL DELETE");
});

export default router;
