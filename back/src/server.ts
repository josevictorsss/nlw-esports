import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prisma = new PrismaClient();

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ads: true,
        },
      },
    },
  });
  return res.json(games);
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
      };
    })
  );
});

app.get('/ads/:id/discord', (req, res) => {
  return res.json([]);
});

app.listen(3333);
