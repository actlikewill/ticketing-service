import express from 'express'

const route = express.Router()

route.post('/api/users/signout', ( req, res ) => {
    req.session = null

    return res.status(200).json({ message: 'logout user'})
})

export { route as signOutRoute }
