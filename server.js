require("dotenv").config();
const cors = require("cors");

const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const dbInitialSetup = require("./dbInitialSetup");
const app = express();

app.use(express.json())
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// dbInitialSetup();

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
