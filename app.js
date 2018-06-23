const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Números aleatorios');
});

app.get('/:numMin/:numMax', (req, res) => {

    let valorMaximo = parseInt(req.params.numMax);
    let valorMinimo =  parseInt(req.params.numMin);

    if ( isNaN(valorMaximo) || isNaN(valorMinimo) ) {
        res.send('algun parametro no es numerico');
    } else {
        var calculoAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo) + valorMinimo) ;
        res.send(`Número aleatorio: ${calculoAleatorio}`);
    }
    res.end();
});

app.listen(port, () => {
    console.log(`Server running on port ${port} `);
});