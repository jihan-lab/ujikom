import express from "express";
import {
  createPakaian,
  deletePakaian,
  getPakaian,
  getPakaianById,
  updatePakaian,
} from "../controllers/PakaianController.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/pakaian", verifyUser, getPakaian);
router.get("/pakaian/:id", verifyUser, getPakaianById);
router.post("/pakaian", verifyUser, createPakaian);
router.patch("/pakaian/:id", verifyUser, updatePakaian);
router.delete("/pakaian/:id", verifyUser, deletePakaian);

export default router;
