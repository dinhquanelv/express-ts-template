import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config';

import { connect } from '~/config/db';
import { routes } from '~/routes';

const app = express();
const port = process.env.PORT || 5000;

// connect database
connect();

app.use(
  cors({
    origin: process.env.BASE_URL || 'http://localhost:3000', // port fe
    credentials: true, // allow url call api
  }),
);
app.use(express.json());
app.use(morgan('dev'));

// ping server
app.head('/ping', (req, res) => {
  res.sendStatus(200);
});

// handle routes
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
