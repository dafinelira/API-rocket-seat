const { Router } = require("express") ;

const UsersController = require("../controllers/controller");

const usersRoutes = Router();

function myMiddleware (request, response, next){
    console.log("você passou pele middleware");
    
    next();
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware,usersController.create);

usersRoutes.put('/:id', usersController.update);

module.exports = usersRoutes;