const { Router } = require("express") ;

const UsersController = require("../controllers/controller")

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;