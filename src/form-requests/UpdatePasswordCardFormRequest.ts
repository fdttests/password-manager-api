import { Joi } from 'express-validation';

const validation = {
    params: Joi.object({
        id: Joi.string().required(),
    }), 
    body: Joi.object({
        data: Joi.object({
            url: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }),
}

export default validation;