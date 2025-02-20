const mongoose = require("mongoose");
console.log("Hi");
console.log(Hi);
let a = 10;

                         const                       connectToDB = async ()=>{
    // console.log( process.env.MONGO_URL)
    try{
                               await mongoose.connect(process.env.MONGO_URL)
                      console.log("connected to DB with link", process.env.MONGO_URL)
    }catch(err){
                                 console.log("Failed to connect to db")
    }
}

module.exports = connectToDB