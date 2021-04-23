import express from 'express'

const route = express.Router()

route.post('/api/users/currentuser', ( req, res ) => {
    res.status(200).json({ message: 'current user'})

})

export { route as currentUserRoute }
