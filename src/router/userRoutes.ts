import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserDetail,
  updateUser,
} from "../handler";

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/", createUser);
userRoutes.get("/:userId", getUserDetail);
userRoutes.put("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);

export default userRoutes;
