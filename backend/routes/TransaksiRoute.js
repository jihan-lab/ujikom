import express from "express";
import {
  getTransakasi,
  getTransakasiById,
  createTransakasi,
  updateTransakasi,
  deleteTransakasi,
} from "../controllers/TransaksiController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/transaksi", verifyUser, getTransakasi);
router.get("/transaksi/:id", verifyUser, getTransakasiById);
router.post("/transaksi", verifyUser, createTransakasi);
router.patch("/transaksi/:id", verifyUser, updateTransakasi);
router.delete("/transaksi/:id", verifyUser, deleteTransakasi);

export default router;
