import mongoose from "mongoose";

const connectDB = async (req,res) => {
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/mern_auth_app`);
        console.log(`Mongo DB Connected  !!  DB_HOST: ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("Mongo Db connection error",error);
        process.exit(1)
    }
}
export default connectDB;