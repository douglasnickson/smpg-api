import GetStreamingServiceToken from '@entities/GetStreamingServiceToken';
import { SpotifyToken } from '@entities/SpotifyToken';
import { Router } from 'express';
import { getTokenController } from './useCases/GetToken';

const routes = Router();

routes.post('/authorization/spotify', (request, response) => {
  const spotify: GetStreamingServiceToken = new SpotifyToken(request);
  return getTokenController.handle(response, spotify);
});

export default routes;
