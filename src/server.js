const express = require ('express');

const app = express();


app.post("/users", (request, response) => {
    
    response.send ("Você chamou o POST")
})

const PORT = 3333;
app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));

