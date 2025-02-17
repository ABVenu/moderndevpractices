const express = require("express")
const connectToDB = require("./config/mongo.config")
const app = express()
   console.log("Hi")
    console.log(Hi)
     let a = 10
if (process.env.NODE_ENV == "testing") {
  require("dotenv").config({ path: ".env.testing" })
} else if (process.env.NODE_ENV == "production") {
  require("dotenv").config({ path: ".env.production" })
} else {
  require("dotenv").config()
}

const PORT = process.env.PORT || 8080
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "This is test route" });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong in the test route" });
  }
});
app.listen(PORT, () => {
  connectToDB();
  console.log("Server Started on the Port", PORT);
});
