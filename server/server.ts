import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.use(cors());
// Sample Express routes
// app.get('/', (req: any, res: any) => {
//     res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//     return res.send("hello world")
// });

// MongoDB connection
mongoose.connect(`${process.env.MONGODB_URI}`)
.then(() => {
    app.use(express.json());
    app.use('/api', routes);
    console.log("🚀 Connected to MongoDB")
    return app.listen(5000, () => console.log("🚀 Server in running on port 5000"));
});