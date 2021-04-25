import { validationResult } from 'express-validator'
import { Request } from 'express'
import { RequestValidationError } from '../errors'

export const dataIsValid = (req: Request ) => 
    new Promise ( ( resolve, reject ) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        reject( new RequestValidationError(errors.array()) )
    }

    resolve(true)

    })


