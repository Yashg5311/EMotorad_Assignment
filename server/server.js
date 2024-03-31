const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());


const dbConfig=require('./config/dbConfig');
const usersRoute =require("./routes/usersRoute");

const profileRoute=require("./routes/profileRoute");


app.use("/api/users", usersRoute);

app.use('/api/profiles', profileRoute);




const port = process.env.PORT || 5000;

// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
