import express from "express";
import {
  getPelanggan,
  getPelangganById,
  createPelanggan,
  updatePelanggan,
  deletePelanggan,
} from "../controllers/PelangganController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/pelanggan", verifyUser, getPelanggan);
router.get("/pelanggan/:id", verifyUser, getPelangganById);
router.post("/pelanggan", verifyUser, createPelanggan);
router.patch("/pelanggan/:id", verifyUser, updatePelanggan);
router.delete("/pelanggan/:id", verifyUser, deletePelanggan);

export default router;
