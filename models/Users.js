import db from "../Controllers/database/database.js";
import { DataTypes } from "sequelize";

const UsersModel = db.define("users", {
    username: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
},{
    timestamps: false
});



export default UsersModel