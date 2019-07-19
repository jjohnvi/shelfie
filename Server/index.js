const express = require("express");
const app = express();
const PORT = 4000;
const massive = require("massive");
const controller = require("./Controller/Controller");
require("dotenv").config();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected :)");
  })
  .catch(console.log);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});

app.post("/api/inventory", controller.create);
app.get("/api/inventory", controller.getAll);
app.get("/api/inventory/:id", controller.getOne);
app.put("/api/inventory/:id", controller.update);
app.delete("/api/inventory/:id", controller.delete);
