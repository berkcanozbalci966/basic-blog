const Joi = require('@hapi/joi')
import { User } from "../types/Types"

const registerValidation = (reqBody:User) => {
    const schema = Joi.object({
     
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        userName: Joi.string().min(5).required(),
    })

    return schema.validate(reqBody)
}

const loginValidation = (reqBody: User) => {
    const schema = Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(reqBody)
}

export {registerValidation,loginValidation}