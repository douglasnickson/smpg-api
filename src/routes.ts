import GetStreamingServiceToken from '@entities/GetStreamingServiceToken';
import { Router } from 'express';
import { SpotifyToken } from '@entities/SpotifyToken';
import { getTokenController } from './useCases/GetToken';
import { searchController } from '@useCases/Search';
import { createPlaylistController } from '@useCases/CreatePlaylist';

const routes = Router();

routes.post('/authorization/spotify', (request, response) => {
  const spotify: GetStreamingServiceToken = new SpotifyToken(request);
  return getTokenController.handle(response, spotify);
});

routes.get('/search', (request, response) => {
  return searchController.handle(request, response);
});

routes.get('/search/album', (request, response) => {
  return searchController.handle(request, response);
});

routes.get('/search/track', (request, response) => {
  return searchController.handle(request, response);
});

routes.post('/playlist/create', (request, response) => {
  return createPlaylistController.handle(request, response);
});

export default routes;
