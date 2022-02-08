import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    console.log('ICI')
    if (connection.isConnected) return;
    console.log('ICI2')
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('ICI3')
    connection.isConnected = db.connections[0].readyState;
    console.log('DB connected:', connection.isConnected);
};

export default dbConnect;