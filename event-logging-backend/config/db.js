const mongoose = require("mongoose");

require("dotenv").config({
    path : '.env'
})


const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connect successfully");
        
    } catch (error) {
        console.error("Database connection error ",error);
        
    }
}

module.exports = connectDb