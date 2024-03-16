import express from 'express'

import { getSetLiked, removeLiked, setLiked } from '../controllers/setLiked.js'

const routerSetLikeds = express.Router()

routerSetLikeds.get('/', getSetLiked)
routerSetLikeds.post('/', setLiked)
routerSetLikeds.delete('/', removeLiked)





export default routerSetLikeds;