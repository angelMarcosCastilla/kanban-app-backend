import express from 'express'

const Router = express.Router()

Router.get('/', (_req, res) => {
  res.json({ message: 'Hello World task' })
})

export { Router }
