import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_ , res) => {
    res.send("Hello World!!!!1");
})

app.listen(PORT, () => {
  console.log("server init")
})

