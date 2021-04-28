import express from 'express'
import { BadRequestError } from '../errors/bad-request-error'
import { validateRequestData } from '../middleware'
import { User, UserDocument } from '../models'
import { Password } from '../services'
import { alreadyExists as existingUser, userDataValidator } from '../validators'
import jwt from 'jsonwebtoken'

const route = express.Router()

route.post('/api/users/signin', userDataValidator, validateRequestData, async ( req: express.Request, res: express.Response) => {
    const { email, password } = req.body

    const user : UserDocument = await existingUser ( User, {email} )

    if ( ! user ) {
        throw new BadRequestError("Invalid Credentials")
    }
    
    const passwordMatch = await Password.compare( user.password, password)
    
    if ( ! passwordMatch ) {
        throw new BadRequestError("Invalid Credentials")
    }

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!)

    req.session = {
        jwt: userJwt
    }

    return res.status(200).json({user: user})

})

export { route as signInRoute }
