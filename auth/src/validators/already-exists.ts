import { BadRequestError } from "../errors/bad-request-error"
import mongoose from 'mongoose'

export const alreadyExists = (model: any, field:any): Promise<any | null> =>
    new Promise(async ( resolve, reject ) => { 
        try {
            const value = await model.findOne (field)
            resolve (value)
        } catch {
            reject (new Error ())
        }

    })