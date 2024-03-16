import express from 'express'

import { deleteAllComents, deleteAllLikeds, deleteAlldisLikeds} from '../controllers/comentsandlikes.js' 

const changeLikesAndComents = express.Router()


changeLikesAndComents.delete('/alllikes', deleteAllLikeds)
changeLikesAndComents.delete('/alldislikes', deleteAlldisLikeds)
changeLikesAndComents.delete('/allcoments', deleteAllComents)

export default changeLikesAndComents