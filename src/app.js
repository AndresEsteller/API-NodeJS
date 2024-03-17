import express from "express";
import cors from 'cors';
import morgan from 'morgan';

import taskRoutes from './routes/task.routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', taskRoutes)

export default app;