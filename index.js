const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked! Oh my!!! Really...");
});

app.listen(3000);
