import express from 'express'

const route = express.Router()

route.post('/api/users/signin', ( req, res ) => {
res.status(200).json({ message: 'login user'})
})

export { route as signInRoute }

