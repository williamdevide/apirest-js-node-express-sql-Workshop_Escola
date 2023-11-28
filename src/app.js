import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
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
