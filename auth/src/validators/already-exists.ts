import { BadRequestError } from "../errors/bad-request-error"

export const alreadyExists = (model: any, field:any) =>
    new Promise(async ( resolve, reject ) => { 

       const value = await model.findOne(field)

       if (value) {
            reject(new BadRequestError('Already Exists'))
       } 
           resolve(value) 
    })