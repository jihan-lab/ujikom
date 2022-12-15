import Pakaian from "../models/PakaianModel.js";
import Transaksi from "../models/TransaksiModel.js";

export const getPakaian = async (req, res) => {
  try {
    const response = await Pakaian.findAll({
      include: {
        model: Transaksi,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getPakaianById = async (req, res) => {
  try {
    const response = await Pakaian.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createPakaian = async (req, res) => {
  const { pakaian_transaksi, pakaian_jenis, pakaian_jumlah } = req.body;
  try {
    await Pakaian.create({
      pakaian_transaksi: pakaian_transaksi,
      pakaian_jenis: pakaian_jenis,
      pakaian_jumlah: pakaian_jumlah,
      transaksiId: pakaian_transaksi,
    });
    res.status(201).json({ msg: "Pakaian created successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePakaian = async (req, res) => {
  const { pakaian_transaksi, pakaian_jenis, pakaian_jumlah } = req.body;
  try {
    await Pakaian.update(
      {
        pakaian_transaksi: pakaian_transaksi,
        pakaian_jenis: pakaian_jenis,
        pakaian_jumlah: pakaian_jumlah,
        transaksiId: pakaian_transaksi,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(201).json({ msg: "Pakaian updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePakaian = async (req, res) => {
  try {
    await Pakaian.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pakaian deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
