import express from 'express';

const app = express();

app.use(express.json());

app.get('/test', (request, response) => {
  response.json({ message: 'Hello World'});
})

app.listen(3333);