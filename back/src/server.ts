import { PrismaClient } from '@prisma/client';
import express, { response } from 'express';

const app = express();
const prisma = new PrismaClient();

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany();
  return response.json(games);
});

app.post('/ads', (req, res) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  return response.json([]);
});

app.get('/ads/:id/discord', (req, res) => {
  return response.json([]);
});

app.listen(3333);
