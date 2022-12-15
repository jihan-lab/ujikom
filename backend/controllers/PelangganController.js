import Pelanggan from "../models/PelangganModel.js";

export const getPelanggan = async (req, res) => {
  try {
    const response = await Pelanggan.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getPelangganById = async (req, res) => {
  try {
    const response = await Pelanggan.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createPelanggan = async (req, res) => {
  const { pelanggan_name, pelanggan_hp, pelanggan_alamat } = req.body;
  try {
    await Pelanggan.create({
      pelanggan_name: pelanggan_name,
      pelanggan_hp: pelanggan_hp,
      pelanggan_alamat: pelanggan_alamat,
    });
    res.status(201).json({ msg: "Pelanggan created successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePelanggan = async (req, res) => {
  const { pelanggan_name, pelanggan_hp, pelanggan_alamat } = req.body;
  try {
    await Pelanggan.update(
      {
        pelanggan_name: pelanggan_name,
        pelanggan_hp: pelanggan_hp,
        pelanggan_alamat: pelanggan_alamat,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(201).json({ msg: "Pelanggan updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePelanggan = async (req, res) => {
  try {
    await Pelanggan.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(201).json({ msg: "Pelanggan deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
