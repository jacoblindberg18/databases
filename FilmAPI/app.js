const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.server = app.listen(port, () => {
    console.log(`Runningonport${port}`);
});

module.exports = app;
