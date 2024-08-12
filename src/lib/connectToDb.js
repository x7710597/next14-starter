// import mongoose from "mongoose";
const {default: mongoose} = require("mongoose")

const connection = {} // when in development when we refresh the page the connection will try to connect again
//to avoid that check if it's already connected

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("using existing connection")
      return
    }
    //if not connection create new one:
    const db = await mongoose.connect(process.env.MONGO);
    //set connection

    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log(error);
    throw new Error(error);

  }
}
