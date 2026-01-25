const express = require("express");
const app = express();
const router = require("./router/auth_router");
const connectDB = require("./utils/db");

app.use(express.json());
app.use("/api/auth", router);

const PORT = 5000;

// connection to db and server
connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Running http://localhost:${PORT}`);
});
});