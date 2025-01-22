const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./corsSetting");
const port=process.env.PORT || 5000;

const dbConnect = require("./config/dbConnect");

const postRouter = require("./routes/postRoute");

app.use(express.json());
app.use(express.urlencoded( { extended : true }));

app.use("/", postRouter);

dbConnect();

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("Server is running at "+ port);
})