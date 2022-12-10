import express from "express";
import dbConnection from "./db/db.js";
import cors from "cors";
import route from "./routes/routes.js";
const app = express();
app.use(cors());
dbConnection();
app.use(express.json());
app.use("/", route);

app.listen(5000, () => {
  console.log("server started");
});
