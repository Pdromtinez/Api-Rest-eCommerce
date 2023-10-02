import db from "../Controllers/database/database.js";
import { DataTypes} from "sequelize";



const BrandModel = db.define("Shoes_brands", {
    name: {
        type: DataTypes.STRING
    },
},{
    timestamps: false
});



export default BrandModel