import db from "../Controllers/database/database.js";
import { DataTypes } from "sequelize";
import ordersModel from "./Orders.js";


const SoldItemsModel = db.define("order_items", {
    quantity: {
        type: DataTypes.STRING
    },
},{
    timestamps: false
});



export default SoldItemsModel