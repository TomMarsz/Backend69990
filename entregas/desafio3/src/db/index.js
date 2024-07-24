import mongoose from 'mongoose'
import { dbUser, dbPassword, dbHost, dbName } from "../configs/db.config.js"

const mongoConnect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/?retryWrites=true&w=majority&appName=${dbName}`)
    console.log('DB is connected');
  } catch (error) {
    console.log(error);
  }
}

export default mongoConnect

// mongodb+srv://admin:<password>@backend69990.dkiqogp.mongodb.net/?retryWrites=true&w=majority&appName=Backend69990

// mongodb+srv://admin:<password>@backend69990.dkiqogp.mongodb.net/?retryWrites=true&w=majority&appName=Backend69990