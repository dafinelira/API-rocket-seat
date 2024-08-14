const {hash} = require("bcryptjs");

const AppError = require ("../utils/AppError");

const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(request, response){
        const{name, email, password} = request.body;
        
        const database = await sqliteConnection();
        const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUsersExists){
            throw new AppError("Este email já está em uso.");
        }

        const hashedPassword = await hash(password, 10);

        await database.run("INSERT INTO users(name, email, password) VALUES(?, ?, ?)",
            [name, email, hashedPassword]
        );
    
        return response.status(201).json();
        /* response.status(201).json ({name, email, password})*/
    }

    async update(request,response){
        const{ name, email } = request.body;
        const{ id } = request.params;

        const user = await database.get("SELECT * FROM users WHERE id = (?), [id]");

        if(!user) {
            throw new AppError("Usuário não encontrado");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?), [email]");
    
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== id){
            throw new AppError("Este e-mail está em uso");
        }

        user.name = name;
        user.email = email;

        await database.run(`
            UPDATE users SET 
            name = ?,
            email = ?,
            updated_at = ?,
            WHERE id = ?`,

            [user.name, user.email, new Date(), id]        
        );

        return response.json();
    }

}
module.exports = UsersController;