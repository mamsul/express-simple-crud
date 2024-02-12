import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.users.findMany();
  res.json({ message: "success", data: users });
};

export const getUserDetail = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await prisma.users.findFirstOrThrow({
      where: {
        id: parseInt(userId),
      },
    });

    res.json({
      message: "Success get user detail",
      data: user,
    });
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;

  const userData = await prisma.users.create({
    data: {
      name: name,
      email: email,
      address: address ?? null,
    },
  });

  res.json({ data: userData, message: "User successfully created" });
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, address } = req.body;
    const { userId } = req.params;
    const updatedUser = await prisma.users.update({
      where: {
        id: parseInt(userId),
      },
      data: {
        name: name,
        email: email,
        address: address ?? null,
      },
    });

    if (updatedUser) {
      res.json({
        message: "Success update user",
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const deletedUser = await prisma.users.delete({
      where: {
        id: parseInt(userId),
      },
    });

    res.json({
      message: "Success delete user",
      data: deletedUser.name,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    if (error.code === "P2025") {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
};
