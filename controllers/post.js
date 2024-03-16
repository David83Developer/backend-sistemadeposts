import {db} from '../db.js'

export const getPosts = (_, res) => {
    const q = "SELECT * FROM post ORDER BY id DESC";


    db.query(q,(err,data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    })

}

export const addPost = (req, res) => {
    const q = "INSERT INTO post(`user_post`, `name_post`, `content`, `data_post`) VALUES(?)"

    const values = [
        req.body.user_post,
        req.body.name_post,
        req.body.content,
        req.body.data_post
    ]

    db.query(q, [values], (err)=>{
        if(err) return res.json(err)

        return res.status(200).json('postado!!')
    } )
    
}


export const updatePost = (req,res) => {
    const q = "UPDATE post SET `user_post`=?, `name_post`=?, `content`=?, `edited`=? WHERE `id`= ?";
    
    const values = [
        req.body.user_post,
        req.body.name_post,
        req.body.content,
        req.body.edited
    ]

    db.query(q, [...values, req.params.id], (err)=> {
        if(err) return res.json(err)

        return res.status(200).json('atualizado!!')
    })


}



export const deletePost = (req, res) => {
    const q = 'DELETE FROM post WHERE `id` =?'

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("deletado!")

    })
}


export const addLike = (req, res) => {
    const q = "UPDATE post SET `likes`=?, `dislikes`=?, `numberComents`=? WHERE `id`= ?";
    
    const values = [
        req.body.likes,
        req.body.dislikes,
        req.body.numberComents

    ]

    db.query(q, [...values, req.params.id], (err)=> {
        if(err) return res.json(err)

        return res.status(200).json('atualizado!!')
    })


}

export const updateNumberPost = (req, res) => {
    const q = "UPDATE post SET `likes`=?, `dislikes`=?, `numberComents`=? WHERE `id`= ?";
    
    const values = [
        req.body.likes,
        req.body.dislikes,
        req.body.numberComents
    ]

    db.query(q, [...values, req.params.id], (err)=> {
        if(err) return res.json(err)

        return res.status(200).json('atualizado!!')
    })


}


