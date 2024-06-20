import mongoose from "mongoose"

let isConnected:Boolean=false

export const connectToDB=async()=>{
  mongoose.set('strictQuery',true) 
  // When strictQuery is set to true, Mongoose will only allow queries to include fields that are defined in the schema. 

  if(!process.env.MONGODB_URL) return console.log('MONGOFB_URL not found')
  if(isConnected) return console.log('Already connected to MongoDb')

  try {
    
    await mongoose.connect(process.env.MONGODB_URL)
    
    isConnected=true

    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}