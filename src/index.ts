import express, { Response } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import allRoutes from "./router";
// import cors from "cors";

const app = express();
const PORT = 8080;

// app.use(
//   cors({
//     credentials: false,
//   }),
// );

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (_, res: Response) => {
  return res.json({
    message: "Express Typescript + Prisma + MySQL",
    version: "1.0.0",
  });
});

app.use("/", allRoutes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
