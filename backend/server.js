const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log("SERVER IS LISTENING ON PORT 8080");
});
