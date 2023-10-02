import db from "../Controllers/database/database.js";
import { DataTypes } from "sequelize";
import SoldItemsModel from "./SoldItems.js";


const ordersModel = db.define("orders", {
    id : {
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING
    },
},{
    timestamps: false
});

ordersModel.hasOne(SoldItemsModel, { foreignKey: 'id', as: 'order' });

export default ordersModel