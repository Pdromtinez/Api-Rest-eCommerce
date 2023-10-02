import db from "../Controllers/database/database.js";
import { DataTypes } from "sequelize";


const CategoriesModel = db.define("Shoes_Categories", {
    categoryName: {
        type: DataTypes.STRING
    },
},{
    timestamps: false
});


export default CategoriesModel