import express from 'express'
import jwt from 'jsonwebtoken'

interface UserPayload {
    id: string
    email: string
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload
        }
    }
}

export const currentUser : express.RequestHandler = ( req, res, next) => {
    
    if ( ! req.session?.jwt ) {
        return next()
    }

    try {
        const payload = jwt.verify( req.session.jwt, process.env.JWT_KEY!) as UserPayload
        req.currentUser = payload

    } catch (err) { console.log(err) }

    next()
}