import express from "express";
import {
  getHarga,
  getHargaById,
  createHarga,
  updateHarga,
  deleteHarga,
} from "../controllers/HargaController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/harga", verifyUser, getHarga);
router.get("/harga/:id", verifyUser, getHargaById);
router.post("/harga", verifyUser, createHarga);
router.patch("/harga/:id", verifyUser, updateHarga);
router.delete("/harga/:id", verifyUser, deleteHarga);

export default router;
