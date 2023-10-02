import express  from "express";
import { GetAllOrders, UpdateOrders, DeleteOrders, CreateOrder } from "../Controllers/OrdersControllers.js";

const Ordersrouter = express.Router();

Ordersrouter.get("/", GetAllOrders)

Ordersrouter.get("/:id", GetAllOrders)

Ordersrouter.put("/:id", UpdateOrders)

Ordersrouter.post("/", CreateOrder)

Ordersrouter.delete("/:id", DeleteOrders)


export default Ordersrouter