import express from 'express'

import { getSetDisliked, removeDisliked, setDisliked } from '../controllers/setDislaked.js'

const routerSetDislikeds = express.Router()

routerSetDislikeds.get('/', getSetDisliked)
routerSetDislikeds.post('/', setDisliked)
routerSetDislikeds.delete('/', removeDisliked)





export default routerSetDislikeds;