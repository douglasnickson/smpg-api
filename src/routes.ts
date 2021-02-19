import { Router } from 'express';
import { getTokenController } from './useCases/GetToken';
import { searchController } from '@useCases/Search';
import { createPlaylistController } from '@useCases/CreatePlaylist';
import { addPlaylistItemController } from '@useCases/AddPlaylistItems';

const routes = Router();

routes.post('/authorization/spotify', (request, response) => {
  return getTokenController.handle(request, response);
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

routes.post('/playlist/item/add', (request, response) => {
  return addPlaylistItemController.handle(request, response);
});

export default routes;
