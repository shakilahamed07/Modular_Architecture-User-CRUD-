import cookieParser from "cookie-parser";
import express from "express"
import type { Application } from "express";
import cors from "cors"
import router from "./routers/routes.js";
import notFound from "./middleware/notfound.js";
import golobalErrorHandeler from "./middleware/globalErrorHandler.js";

const app:Application = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
}))
app.use("/api/v1", router)

app.get('/', (req, res) => {
  res.json("Server is running");
});

app.use(golobalErrorHandeler)
app.use(notFound)

export default app;