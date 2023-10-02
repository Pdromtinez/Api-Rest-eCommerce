import { Sequelize } from 'sequelize';


const db = new Sequelize('eCommerce_Shoes', 'root', "" , {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;