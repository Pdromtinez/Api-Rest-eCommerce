import db from "../Controllers/database/database.js";
import { DataTypes } from "sequelize";
import BrandModel from "./brands.js";
import CategoriesModel from "./Categories.js";
import UsersModel from "./Users.js";
const ShoesModel = db.define("Shoes", {
    productName: {
        type: DataTypes.STRING
    },
    productDescription: {
        type: DataTypes.STRING
    },
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    
    category_id: {
        type :DataTypes.INTEGER ,
        allowNull: false,
        unique: true,
    },
    user_id:{
        type : DataTypes.INTEGER
    },

    Stock: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
    
},{
    timestamps: false
});



ShoesModel.belongsTo(BrandModel, { foreignKey: 'brand_id', as: 'Brand' });

ShoesModel.belongsTo(UsersModel,{ foreignKey: 'user_id', as: 'Users'})


ShoesModel.belongsTo(CategoriesModel,{ foreignKey: 'category_id', as: 'Category'})

export default ShoesModel