// verção commonjs
//const express = require('express');

//verção module
import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
   // response.send("Rpta ads");
   response.json([
    {id:1 , anuncio:" Anúncio 1"},
    {id:2 , anuncio:" Anúncio 2"},
    {id:3 , anuncio:" Anúncio 3"},
    {id:4 , anuncio:" Anúncio 4"},
   ])
});

app.listen(3333)