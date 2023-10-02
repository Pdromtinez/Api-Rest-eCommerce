import { Sequelize } from 'sequelize';

dotenv.config()

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} = process.env

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
});

export default db;