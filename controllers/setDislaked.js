import {db} from '../db.js'

export const getSetDisliked = (_, res) => {
    const q = "SELECT * FROM setdisliked"

    db.query(q, (err,data)=> {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const setDisliked = (req,res) => {
    const q = "INSERT INTO setdisliked(`cod_user`, `cod_post`) VALUES(?)"

    const values = [
        req.body.cod_user,
        req.body.cod_post
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("gostou")
    })
}

export const removeDisliked = (req,res) => {
    const q = "DELETE FROM setdisliked WHERE `cod_user`=? AND `cod_post`=?"

    const value = [
        req.body.cod_user,
    ]


    db.query(q, [...value, req.body.cod_post], (err)=> {
        if(err) return res.json(err)

        res.status(200).json("dislikado!")
    })


}

