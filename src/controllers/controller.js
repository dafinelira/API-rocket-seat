const AppError = require ("../utils/AppError");

const sqliteConnection = require("../database/sqlite")

class UsersController {
/**
 * como boa prática: ATÉ 5 funções
 * 1- index - GET para listar vários registros
 * 2- show - GET para exibir registro especifico
 * 3 - create - POST para criar um registro
 * 4- update - PUT para atualizar um registo.
 * 5- delete - DELETE para remover um registro. 
 */
    async create(request, response){
        const{name, email, password} = request.body;
        
        const database = await sqliteConnection();
        const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUsersExists){
            throw new AppError("Este email já está em uso.");
        }

        await database.run("INSERT INTO users(name, email, password) VALUES(?, ?, ?)",
            [name, email, password]
        );
    
        return response.status(201).json();
        /* response.status(201).json ({name, email, password})*/
    }
}

module.exports = UsersController;