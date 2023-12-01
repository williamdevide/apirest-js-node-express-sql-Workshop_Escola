import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://wdkdev.ddns.net',
  'http://35.198.53.165',
  'http://localhost:3002',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/escola/', homeRoutes);
    this.app.use('/escola/users/', userRoutes);
    this.app.use('/escola/tokens/', tokenRoutes);
    this.app.use('/escola/alunos/', alunoRoutes);
    this.app.use('/escola/fotos/', fotoRoutes);
  }
}

export default new App().app;
