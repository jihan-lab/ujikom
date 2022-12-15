import Harga from "../models/HargaModel.js";
import Transaksi from "../models/TransaksiModel.js";

export const getTransakasi = async (req, res) => {
  try {
    const response = await Transaksi.findAll({
      attributes: [
        "uuid",
        "transaksi_tgl",
        "transaksi_berat",
        "transaksi_tgl_status",
        "userId",
        "hargaId",
        "pelangganId",
        "total_harga",
      ],
      include: {
        all: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getTransakasiById = async (req, res) => {
  try {
    const response = await Transaksi.findOne({
      where: {
        uuid: req.params.id,
      },
      include: {
        all: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createTransakasi = async (req, res) => {
  const harga = await Harga.findAll();
  const { transaksi_berat, transaksi_tgl_selesai, hargaId, pelangganId } =
    req.body;
  const date = new Date();
  const total = transaksi_berat * harga[0].harga_per_kg;
  try {
    await Transaksi.create({
      transaksi_tgl: date,
      transaksi_berat: transaksi_berat,
      transaksi_tgl_selesai: date,
      transaksi_tgl_status: 0,
      userId: req.userId,
      hargaId: hargaId,
      transaksi_harga: hargaId,
      pelangganId: pelangganId,
      transaksi_pelanggan: pelangganId,
      total_harga: total,
    });
    res.status(201).json({ msg: "Transaksi created successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateTransakasi = async (req, res) => {
  const transaksi = await Transaksi.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  const status = transaksi.transaksi_tgl_selesai < new Date();

  let nilai;
  if (status === true) {
    nilai = 1;
  } else {
    nilai = 0;
  }

  const harga = await Harga.findAll();
  const { transaksi_berat, transaksi_tgl_selesai, hargaId, pelangganId } =
    req.body;
  const date = new Date();
  const total = transaksi_berat * harga[0].harga_per_kg;
  try {
    await Transaksi.update(
      {
        transaksi_tgl: date,
        transaksi_berat: transaksi_berat,
        transaksi_tgl_selesai: transaksi_tgl_selesai,
        transaksi_tgl_status: nilai,
        userId: transaksi.userId,
        hargaId: hargaId,
        transaksi_harga: hargaId,
        pelangganId: pelangganId,
        transaksi_pelanggan: pelangganId,
        total_harga: total,
      },
      {
        where: {
          uuid: transaksi.uuid,
        },
      }
    );
    res.status(201).json({ msg: "Transaksi updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTransakasi = async (req, res) => {
  try {
    await Transaksi.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transaksi delete successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
