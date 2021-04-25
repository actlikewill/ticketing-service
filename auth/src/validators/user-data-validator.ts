import { body } from 'express-validator'

export const userDataValidator = [
    body('email')
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be 4 to 20 characters')

]