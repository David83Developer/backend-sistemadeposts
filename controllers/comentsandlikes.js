import { db } from '../db.js'

export const deleteAllLikeds = (req, res) => {
    const q = "DELETE FROM setliked WHERE `cod_post`=?"

    db.query(q, [req.body.cod_post], (err)=> {
        if(err) return res.json(err)

        return res.status(200).json("deletado com os likes!")
    })
}

export const deleteAlldisLikeds = (req, res) => {
    const q = "DELETE FROM setdisliked WHERE `cod_post`=?"

    db.query(q, [req.body.cod_post], (err)=> {
        if(err) return res.json(err)

        return res.status(200).json("deletado com os dislikes!")
    })
}

export const deleteAllComents = (req,res) => {
    const q = "DELETE FROM coments WHERE `id_post`=?"

    db.query(q, [req.body.id_post], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("comentários deletados com o post!")
    })
}