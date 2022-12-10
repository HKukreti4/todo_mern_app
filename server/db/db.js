import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = () => {
  const URI = process.env.MONGODB_URI;
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //this is used to handle the error
  mongoose.connection.on("connected", () => {
    console.log("database connected sucessfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error while connecting with database", error.message);
  });
};

export default dbConnection;
