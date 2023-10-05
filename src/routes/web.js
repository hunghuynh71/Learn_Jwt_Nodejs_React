import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    //path, handler
    router.get("/", homeController.helloWorldHandler);
    router.get("/users", homeController.usersHandler);
    router.post("/create-user", homeController.createUserHandler);

    return app.use("/", router);
}

export default initWebRoutes;