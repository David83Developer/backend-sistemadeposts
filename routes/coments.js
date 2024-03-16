import express from 'express'

import {addComent, deleteComent, getComents} from '../controllers/coment.js'

const routerComents = express.Router()

routerComents.get('/', getComents)
routerComents.post('/', addComent)
routerComents.delete('/:id', deleteComent)

export default routerComents;