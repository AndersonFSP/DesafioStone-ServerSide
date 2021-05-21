import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import './database/connection';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router)

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.Port}`));