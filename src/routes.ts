import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserDetail,
  updateUser,
} from "./handler";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/users/:userId", getUserDetail);
router.put("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);

export default router;
