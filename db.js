import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user: "user2",
    password: "Root#123",
    database: "sistemaDePosts"
})