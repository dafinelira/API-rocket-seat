const express = require ('express');

const app = express();

app.get("/message/:id/:user", (request, response) => {
    response.send(`Id da mensagem: ${request.params.id},
        Para o usuário: ${request.params.user}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));

