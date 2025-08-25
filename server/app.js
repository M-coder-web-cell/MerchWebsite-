import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import {OrderRouter} from './routes/OrderRoutes.js'
import {userRouter} from './routes/userRoutes.js'
import { productRouter } from './routes/ProductRoutes.js';
import { clubRouter } from './routes/clubRoutes.js';
import { orderItemRouter } from './routes/orderItemRoutes.js';

const prisma = new PrismaClient();
const app = express(); 
app.use(express.json());

dotenv.config(); 

app.use('/order', OrderRouter)
app.use('/users', userRouter)
app.use('/product', productRouter)
app.use('/club', clubRouter)
app.use('/orderItem', orderItemRouter)

export {app, prisma}