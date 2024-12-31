const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/test', (req, res) => {
  res.send('test');
  console.log(req.body);
})

app.listen(port, () => {
  console.log("Server is running at "+port);
})