import express from 'express'
import { User } from '../models'
import { alreadyExists, dataIsValid, userDataValidator } from '../validators'
import { BadRequestError } from '../errors/bad-request-error'
import jwt from 'jsonwebtoken'

const route = express.Router()

route.post('/api/users/signUp', userDataValidator, async ( req: express.Request, res: express.Response ) => {
    const { email, password } = req.body 

   if ( (await dataIsValid(req)) && ( ! await alreadyExists( User, {email} ) ) ) {

    const user = User.build({ email, password })
    await user.save()

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!)

    req.session = {
        jwt: userJwt
    }

    return res.status(201).json({ user })

   } 
   
   throw new BadRequestError('Something Went Wrong')
})

export { route as signUpRoute }
