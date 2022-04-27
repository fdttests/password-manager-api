import express from 'express';
import { validate } from 'express-validation';
import CreatePasswordCardUseCase from '../use-cases/CreatePasswordCardUseCase';
import DeletePasswordCardByIdUseCase from '../use-cases/DeletePasswordCardByIdUseCase';
import GetAllPasswordCardUseCase from '../use-cases/GetAllPasswordCardUseCase';
import UpdatePasswordCardUseCase from '../use-cases/UpdatePasswordCardUseCase';
import { default as createPasswordCardFormRequest } from '../form-requests/CreatePasswordCardFormRequest';
import { default as updatePasswordCardFormRequest } from '../form-requests/UpdatePasswordCardFormRequest';

const router = express.Router();

router.get('/', async (request, response) => {
    const action = new GetAllPasswordCardUseCase();
    const cards = await action.execute(request.query);
    
    response.json({
        data: cards
    });
});

router.post('/', validate(createPasswordCardFormRequest, {}, {}), async (request, response) => {
    const action = new CreatePasswordCardUseCase();
    await action.execute(request.body.data);

    response.status(201).send();
});

router.put('/:id', validate(updatePasswordCardFormRequest, {}, {}), async (request, response) => {
    const action = new UpdatePasswordCardUseCase();
    const cardData = request.body.data;
    
    cardData.id = request.params.id;

    await action.execute(cardData);

    response.status(204).send();
});

router.delete('/:id', async (request, response) => {
    const action = new DeletePasswordCardByIdUseCase();
    await action.execute(request.params.id);

    response.status(204).send();
})

export default router;