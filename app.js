const express = require("express");
const app = express();

const PORT = 3000;

    app.listen(PORT, function() {
        console.log(`O express esta funcionando na porta: ${PORT}`);
    });


    app.get('/', (req, res) => {
        res.send('Esta funcionando')
    });