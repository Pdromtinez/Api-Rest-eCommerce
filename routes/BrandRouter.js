import express  from "express";
import { GetAllBrands,CreateBrand,UpdateBrand,DeleteBrand, GetBrandProduct } from "../Controllers/BrandsControllers.js";


const Brandrouter = express.Router();

Brandrouter.get("/", GetAllBrands)

Brandrouter.get("/:id", GetAllBrands)

Brandrouter.post("/", CreateBrand)

Brandrouter.put("/:id", UpdateBrand)

Brandrouter.delete("/:id", DeleteBrand)

Brandrouter.get("/:id/Shoes", GetBrandProduct)

export default Brandrouter