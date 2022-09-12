import express, { response } from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return response.send('Hello World');
});
app.listen(3333);
