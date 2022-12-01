import express from 'express'
import { login } from '../controllers/auth..controller'

const Router = express.Router()

Router.post('/login', login)

export { Router }
