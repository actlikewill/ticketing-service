import express from 'express'
import { body, validationResult } from 'express-validator'
import * as Err from '../errors'

const route = express.Router()

route.post('/api/users/signUp', [
    body('email')
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be 4 to 20 characters')

], ( req: express.Request, res: express.Response ) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        throw new Err.RequestValidationError(errors.array())


    }

    console.log('Creating user...')
    throw new Err.DatabaseConnectionError()

        res.status(200).json({ message: 'signup user'})

})

export { route as signUpRoute }
