var express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
const path = require("path");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const { dashboard } = require("./get_routes");

app.get("/", dashboard);

app.listen(process.env.PORT || 5000);
