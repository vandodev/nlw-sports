import express from 'express'
import { PrismaClient } from '@prisma/client'
//verção module

const app = express();
const prisma = new PrismaClient({
   log:['query']
})

app.get('/games', async (request, response) =>{
   const games = await prisma.game.findMany({
      include:{
         _count:{
            select:{
               ads:true,
            }
         }
      }
   })
   return response.json(games)
   console.log(games)
})

app.post('/ads', (request, response) =>{
   return response.status(201).json([])
})

app.get('/games/:id/ads',async (request, response) => {
   const gameId = request.params.id;
   //get https://localhost:3333/games/1/ads

const ads = await prisma.ad.findMany({
   select:{
      id:true,
      name:true,
      weekDays:true,
      useVoiceChannel:true,
      yearsPlaying:true,
      hourStart:true,
      hourEnd:true,
   },
   where:{
      // gameId: gamesId
      gameId,
   },
   orderBy:{
      createAt: 'desc',
   }
})
   response.json(ads)
});

app.get('/ads/id:/discord', (request, response) => {
   // const adsId = request.params.id;
   response.json([ ])
});

app.listen(3333)