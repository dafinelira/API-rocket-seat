const { Router } = require("express") ;

const NotesController = require("../controllers/noteController");

const notesRoutes = Router();

const notesController = new NotesController();

usersRoutes.post("/", notesController.create);



module.exports = notesRoutes;