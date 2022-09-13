import express, { response } from 'express';

const app = express();

app.get('/games', (req, res) => {
  return response.json([]);
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
