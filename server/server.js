require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth_router");
const contactRoute = require("./router/contact-router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/auth", contactRoute);
app.use(errorMiddleware);

const PORT = 5000;
// connection to db and server
connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Running http://localhost:${PORT}`);
});
});