import {db} from '../db.js'


export const getComents = (_, res) => {

    const q = `SELECT * FROM coments`;

    db.query(q,(err,data)=>{
        if(err) return res.json(err)

        return res.status(200).json(data)
    } )
}

export const addComent = (req, res) => {
    const q = "INSERT INTO coments(`user_post`, `content`, `data_post`, `id_post`) VALUES(?)";

    const values = [
        req.body.user_post,
        req.body.content,
        req.body.data_post,
        req.body.id_post
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('postado!')

    })
}

export const deleteComent = (req,res) => {
    const q = "DELETE FROM coments WHERE `id`=?"

    db.query(q, [req.params.id], (err)=> {
        if (err) return res.json(err)

        return res.status(200).json("Comentário deletado")
    })
}