const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 8080
app.use(express.json())

app.get("/", (req,res)=>{
    try{
        res.status(200).json({msg:"This is test route"})
    }catch(err){
        res.status(500).json({msg:"Something went wrong in the test route"})
    }
})
app.listen(PORT, ()=>{
    console.log("Server Started on the Port", PORT)
})