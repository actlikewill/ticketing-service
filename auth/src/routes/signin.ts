import express from 'express'
import { BadRequestError } from '../errors/bad-request-error'
import { dataIsValid, userDataValidator } from '../validators'

const route = express.Router()

route.post('/api/users/signin', userDataValidator, async ( req: express.Request, res: express.Response) => {

    if ( await dataIsValid(req) ) {

        return res.status(200).json({ message: 'login user'})

    }

    throw new BadRequestError('Sign in failed.')

})

export { route as signInRoute }

