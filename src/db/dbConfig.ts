import mongoose from "mongoose";

export async function ConnectionDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const Connection = mongoose.connection;

    Connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    Connection.on("error", (err) => {
      console.log(
        "MongoDB Connection Error, Please Make your MongoDB is Running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went Wrong!");
    console.log(error);
  }
}
