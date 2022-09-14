// verção commonjs
//const express = require('express');

//verção module
import express, { request, response } from 'express';

const app = express();

app.get('/games', (request, response) =>{
   return response.json([])
})

app.post('/ads', (request, response) =>{
   return response.status(201).json([])
})

app.get('/games/:id/ads', (request, response) => {
   const gamesId = request.params.id;
   //get https://localhost:3333/games/1/ads

   return response.send(gamesId);

   response.json([
    {id:1 , anuncio:" Anúncio 1"},
    {id:2 , anuncio:" Anúncio 2"},
    {id:3 , anuncio:" Anúncio 3"},
    {id:4 , anuncio:" Anúncio 4"},
    {id:555 , anuncio:" Anúncio 4"},
   ])
});

app.get('/ads/id:/discord', (request, response) => {
   // const adsId = request.params.id;
   response.json([ ])
});

app.listen(3333)