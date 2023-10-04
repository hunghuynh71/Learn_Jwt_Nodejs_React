import express from "express";

/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    app.use(express.static('./src/public')); //cho phep truy cap o dau
    app.set("view engine", "ejs"); //khai bao view engine
    app.set("views", "./src/views"); //noi luu tru view
}

export default configViewEngine;