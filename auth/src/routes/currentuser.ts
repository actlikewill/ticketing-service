import express from 'express'
import { currentUser } from '../middleware'
const route = express.Router()

route.get('/api/users/currentuser', currentUser, ( req, res ) => {
  
        return res.status(200).json({ currentUser: req.currentUser || null })

})

export { route as currentUserRoute }
