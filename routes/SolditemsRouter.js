import express  from "express";
import { GetAllSoldItems, UpdateSoldItems, DeleteSoldItems } from "../Controllers/SoldItemsControllers.js";

const SoldItemsrouter = express.Router();

SoldItemsrouter.get("/", GetAllSoldItems)

SoldItemsrouter.get("/:id", GetAllSoldItems)

SoldItemsrouter.put("/:id", UpdateSoldItems)

SoldItemsrouter.delete("/:id", DeleteSoldItems)


export default SoldItemsrouter