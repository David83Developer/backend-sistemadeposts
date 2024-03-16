import {db} from '../db.js'

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q,(err, data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addUser = (req, res) => {
    const q = "INSERT INTO users (`name`, `email`, `ageDate`, `password`) VALUES(?)"

    const values = [
        req.body.name,
        req.body.email,
        req.body.ageDate,
        req.body.password
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('Usuário cadastrado com sucesso')
    })
}