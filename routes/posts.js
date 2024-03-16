import express from 'express'

import {  addPost, addLike, deletePost, getPosts, updatePost, updateNumberPost } from '../controllers/post.js'

const routerPost = express.Router()

routerPost.get('/', getPosts)
routerPost.post('/', addPost)
routerPost.patch('/:id', updatePost)
routerPost.delete('/:id', deletePost)
routerPost.put('/:id', addLike)
routerPost.put('/:id', updateNumberPost)


export default routerPost   