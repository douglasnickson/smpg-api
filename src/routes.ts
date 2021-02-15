import GetStreamingServiceToken from '@entities/GetStreamingServiceToken';
import { SpotifyToken } from '@entities/SpotifyToken';
import { Router } from 'express';
import { getTokenController } from './useCases/GetToken';
import { searchController } from '@useCases/Search';

const routes = Router();

routes.post('/authorization/spotify', (request, response) => {
  const spotify: GetStreamingServiceToken = new SpotifyToken(request);
  return getTokenController.handle(response, spotify);
});

routes.get('/artists', (request, response) => {
  return searchController.handle(request, response);
});

export default routes;
