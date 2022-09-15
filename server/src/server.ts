import express from 'express'
import { PrismaClient } from '@prisma/client'
import {  convertTimeToMinutes } from './utils/time';
//verção module

const app = express();
app.use(express.json());
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

app.post('/games/:id/ads', async (request, response) =>{
    const gameId = request.params.id
    const body: any = request.body
      const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertTimeToMinutes(body.hourStart),
            hourEnd: convertTimeToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        },
    })

    return response.json(ad).status(201)
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
   response.json(ads.map(ad =>{
      return {
         ...ads,
         weekDays: ad.weekDays.split(',')
      }
   }))
});

app.get('/ads/:id/discord', async (request, response) => {
   const adId = request.params.id;
   const ad = await prisma.ad.findFirstOrThrow({
      select:{
         discord:true,
      },
      where:{
         id:adId
      }  
   })

   response.json({
      discord:ad.discord
   })
});

app.listen(3333)