import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Harga from "./HargaModel.js";
import Pelanggan from "./PelangganModel.js";
import Users from "./UserModels.js";
const { DataTypes } = Sequelize;

const Transaksi = db.define(
  "transaksi",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transaksi_tgl: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transaksi_berat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transaksi_tgl_selesai: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transaksi_tgl_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    total_harga: {
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

Users.hasMany(Transaksi);
Transaksi.belongsTo(Users, { foreignKey: "userId" });

Harga.hasOne(Transaksi);
Transaksi.belongsTo(Harga, { foreignKey: "transaksi_harga" });

Pelanggan.hasOne(Transaksi);
Transaksi.belongsTo(Pelanggan, { foreignKey: "transaksi_pelanggan" });

export default Transaksi;
