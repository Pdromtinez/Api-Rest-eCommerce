import express  from "express";
import { GetAllCategories, UpdateCategories, DeleteCategories, CreateCategory, GetCategoriesProducts } from "../Controllers/CategoriesControllers.js";

const Categoriesrouter = express.Router();

Categoriesrouter.get("/", GetAllCategories)

Categoriesrouter.get("/:id", GetAllCategories)

Categoriesrouter.post("/", CreateCategory)

Categoriesrouter.put("/:id", UpdateCategories)

Categoriesrouter.delete("/:id", DeleteCategories)

Categoriesrouter.get("/:id/Shoes", GetCategoriesProducts)

export default Categoriesrouter