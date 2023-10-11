import express  from "express";
import dotenv from 'dotenv';
dotenv.config()
import cookieParser from "cookie-parser";
import userRoutes from './routes/userRoute.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

connectDB()
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('server is ready to go'))

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is listening to port ${port}`))