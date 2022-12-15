import { Sequelize } from "sequelize";

const db = new Sequelize("UJIKOM30_07081222_JihanAbdulRohman", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
