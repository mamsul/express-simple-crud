import express from "express";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

const allRoutes = express.Router();

allRoutes.use("/users", userRoutes);
allRoutes.use("/auth", authRoutes);

export default allRoutes;
