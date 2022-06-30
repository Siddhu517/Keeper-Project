import mongoose from "mongoose";

const dbConnection = async (local_URL) => {
  await mongoose
    .connect(local_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Database Connection Error", err));
};

export default dbConnection;
