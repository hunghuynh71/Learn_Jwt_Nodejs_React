import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8080;

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

configViewEngine(app);
initWebRoutes(app);

//khai bao port cho app
app.listen(PORT, () => {
    console.log(">>> jwt is running on the port " + PORT);
})

