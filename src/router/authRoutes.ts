import express from "express";

const authRoutes = express.Router();

authRoutes.get("/login", () => {});
authRoutes.get("/register", () => {});
authRoutes.get("/forgot-password", () => {});

export default authRoutes;
