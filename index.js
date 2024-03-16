import express from 'express'
import cors from 'cors'
import routerUser from './routes/users.js'
import routerPost from './routes/posts.js'
import routerComents from './routes/coments.js'
import routerSetLikeds from './routes/setLikeds.js'
import changeLikesAndComents from './routes/comAndLikesChange.js'
import routerSetDislikeds from './routes/setDislakeds.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', routerUser)
app.use('/post', routerPost)
app.use('/coments', routerComents)
app.use('/setliked', routerSetLikeds)
app.use('/setdisliked', routerSetDislikeds)
app.use('/', changeLikesAndComents)

app.listen(8800)