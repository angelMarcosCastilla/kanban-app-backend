
import express from 'express'
import { createUser, getUsers } from '../controllers/users.controller'
const Router = express.Router()

Router.post('/create', createUser)
Router.get('/', getUsers)
export { Router }
