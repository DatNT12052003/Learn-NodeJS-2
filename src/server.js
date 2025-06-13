import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine.js';
import initWebRoutes from './routes/web.js';
import connectDB from './config/connectDB.js';

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


viewEngine(app);
initWebRoutes(app);

connectDB();

let PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});