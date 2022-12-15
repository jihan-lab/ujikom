import Harga from "../models/HargaModel.js";

export const getHarga = async (req, res) => {
  try {
    const response = await Harga.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getHargaById = async (req, res) => {
  try {
    const response = await Harga.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createHarga = async (req, res) => {
  const { harga_per_kg } = req.body;
  try {
    await Harga.create({
      harga_per_kg: harga_per_kg,
    });
    res.status(201).json({ msg: "Harga created successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateHarga = async (req, res) => {
  const { harga_per_kg } = req.body;
  try {
    await Harga.update(
      {
        harga_per_kg: harga_per_kg,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(201).json({ msg: "Harga updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteHarga = async (req, res) => {
  try {
    await Harga.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(201).json({ msg: "Harga deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
