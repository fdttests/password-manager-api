import { Joi } from 'express-validation';

const validation = {
    body: Joi.object({
        data: Joi.object({
            name: Joi.string().required(),
            url: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }),
}

export default validation;