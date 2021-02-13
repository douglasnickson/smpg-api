import { Router } from 'express';
import { getTokenController } from './useCases/GetToken'

const routes = Router();

routes.post('/authorization', (request, response) => {
  return getTokenController.handle(request, response);
});

export default routes;
