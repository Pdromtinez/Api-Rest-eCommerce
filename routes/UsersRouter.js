import express  from "express";
import { GetAllUsers, CreateUser, UpdateUsers, DeleteUsers, UserscheckRole, GetUserProduct } from "../Controllers/UsersControllers.js";


const router = express.Router();

router.get("/", GetAllUsers)

router.get("/:id", GetAllUsers)

router.post("/", CreateUser)

router.put("/:id", UpdateUsers)

router.delete("/:id", DeleteUsers)

router.get("/:id/Shoes", GetUserProduct)

export default router