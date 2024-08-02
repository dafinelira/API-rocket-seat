class UsersController {
/**
 * como boa prática: ATÉ 5 funções
 * 1- index - GET para listar vários registros
 * 2- show - GET para exibir registro especifico
 * 3 - create - POST para criar um registro
 * 4- update - PUT para atualizar um registo.
 * 5- delete - DELETE para remover um registro. 
 */
    create(request, response){
        const{name, email, password} = request.body;
    
        response.json ({name, email, password})
    }

}

module.exports = UsersController;