const express = require("express");
const { route } = require("./route/route");
const app = express();
app.use(express.json());

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("this is a testing phase");
});

app.listen(5005, () => {
  console.log("server is running on the port no.5005");
});
