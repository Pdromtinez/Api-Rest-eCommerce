import express  from "express";
import { GetAllShoes, CreateShoe, UpdateShoes, DeleteShoes } from "../Controllers/ShoesControllers.js";

const Shoesrouter = express.Router();

Shoesrouter.get("/", GetAllShoes)

Shoesrouter.get("/:id", GetAllShoes)

Shoesrouter.post("/", CreateShoe)

Shoesrouter.put("/:id", UpdateShoes)

Shoesrouter.delete("/:id", DeleteShoes)


export default Shoesrouter