import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import https from "https";
import publicRoutes from "./routes/public";
import adminRoutes from "./routes/admin";
import { requestInterceptor } from "./utils/requestInterceptor";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all("*", requestInterceptor);

app.use("/admin", adminRoutes);
app.use("/", publicRoutes);

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
};

const regularServer = http.createServer(app);
if (process.env.NODE_ENV === "production") {
  // TODO: config SSL
  // TODO: run server on port 80 and port 443
} else {
  const serverPort: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 9000;
  runServer(serverPort, regularServer);
}
