const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config();
const user = process.env.USER
const pass = process.env.PASS
const Connection = async() =>{
    const URL  = `mongodb+srv://${user}:${pass}@medfist.h4p3tmw.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL);
        console.log("Database Connected");
    }
    catch (err)
    {
        console.log(err);
    }
}
Connection();
app.use(express.json())
app.use(cors())
const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})