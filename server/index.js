import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));    
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req,res) => {
    res.send('Hello, welcome');
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  });

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);
