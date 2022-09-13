import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prisma = new PrismaClient();

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany();
  return res.json(games);
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  return res.json([]);
});

app.get('/ads/:id/discord', (req, res) => {
  return res.json([]);
});

app.listen(3333);
