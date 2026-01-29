const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);


const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB.");
    } catch (error) {
        console.error("database connection failed.");
        process.exit(0);
    }
}

module.exports = connectDB;

// {
//     "email": "parth@gmail.com",
//     "password": "parthas"
// }

// {
//     "username": "Parthas",
//     "email": "parth1@gmail.com",
//     "phone": "8765476876",
//     "password": "parthas"
// }

//http://localhost:5000/api/auth