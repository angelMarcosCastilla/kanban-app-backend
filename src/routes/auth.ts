import express from 'express'
import { login, logout } from '../controllers/auth.controller'
import { isAutorized } from '../middleware/autorization'

const Router = express.Router()

Router.post('/login', login)
Router.post('/logout', isAutorized, logout)

export { Router }
