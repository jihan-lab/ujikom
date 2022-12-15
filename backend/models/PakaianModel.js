import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Transaksi from "./TransaksiModel.js";

const { DataTypes } = Sequelize;

const Pakaian = db.define(
  "pakaian",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pakaian_transaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pakaian_jenis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pakaian_jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Transaksi.hasOne(Pakaian);
Pakaian.belongsTo(Transaksi, { foreignKey: "pakaian_transaksi" });

export default Pakaian;
