require("express-async-errors");
const express = require("express");
const app = express();
const config = require("config");
let counter = 0

app.use(express.static('dist', {
    setHeaders: (res, path, stat) => {
      console.log(++counter)
    }
}));
  

require("./startup/cors")(app);
app.use(express.json());
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || config.get("port");
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
});