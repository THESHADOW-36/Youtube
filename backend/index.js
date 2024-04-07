import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import connectDB from "./config/database.js";
import errorHandler from "./middlewares/error.js";

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors())
dotenv.config({ path: './config/.env' });

app.use("/api/v1", router)

app.use(errorHandler);

connectDB();

app.listen(8000, () => console.log("Server is running on port 8000.")) 