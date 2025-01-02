const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.send('Hello!');
})

// app.get('/category', (req, res) => {
//   res.send('category');
// })

// app.get('/login', (req, res) => {
//   res.send('login')
// })

app.listen(port, () => {
  console.log("Server is running at "+port);
})