import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Router } from './routes/index'
import { connect } from './db/config'
connect()

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello World!!!!1')
})

app.use('/v1', Router)
app.listen(PORT, () => {})
