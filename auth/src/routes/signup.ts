import express from 'express'
import { body, validationResult } from 'express-validator'
import { User } from '../models'
import { alreadyExists, dataIsValid, userDataValidator } from '../validators'
import * as Err from '../errors'

const route = express.Router()

route.post('/api/users/signUp',userDataValidator, async ( req: express.Request, res: express.Response ) => {
   
    await dataIsValid(req)

    const { email, password } = req.body

    const userExists = await alreadyExists( User, {email})

    console.log( userExists )


    const existingUser = await User.findOne({ email })

    if (existingUser) {
        console.log('Email in use')
        return res.status(400).json({message: 'Email in use'})
    }

    const user = User.build({ email, password })
    await user.save()
            .then(user => res.status(201).json({ user }))
            .catch(e => res.status(400).json({message: 'Oopsie poopsie'})
    


    ) 
})

export { route as signUpRoute }
