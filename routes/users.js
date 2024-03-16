import express from 'express'

import {getUsers, addUser} from '../controllers/user.js'

const routerUser = express.Router()

routerUser.get('/', getUsers)
routerUser.post('/', addUser)

export default routerUser