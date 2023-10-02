import express  from "express";
import { GetAllUsers, CreateUser, UpdateUsers, DeleteUsers, UserscheckRole } from "../Controllers/UsersControllers.js";

const router = express.Router();

router.get("/", GetAllUsers)

router.get("/:id", GetAllUsers)

router.post("/", CreateUser)

router.put("/:id", UpdateUsers)

router.delete("/:id", DeleteUsers)


export default router