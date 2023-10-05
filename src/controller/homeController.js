import serviceUser from "../services/serviceUser";

//callback funtion
const helloWorldHandler = (req, res) => {
    return res.render("index.ejs");
}

const usersHandler = (req, res) => {
    return res.render("users.ejs");
}

const createUserHandler = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    serviceUser.createUser(email, password, username);

    return res.send("create user");
}

module.exports = {
    helloWorldHandler,
    usersHandler,
    createUserHandler
}