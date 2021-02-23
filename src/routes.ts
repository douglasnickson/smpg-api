import { Router } from 'express';
import { getTokenController } from './useCases/GetToken';
import { searchController } from '@useCases/Search';
import { browseController } from '@useCases/Browse';
import { createPlaylistController } from '@useCases/CreatePlaylist';
import { addPlaylistItemsController } from '@useCases/AddPlaylistItems';
import { getPlaylistItemsController } from '@useCases/GetPlaylistItems';

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

routes.get('/browse/categories', (request, response) => {
  return browseController.handleCategories(request, response);
});

routes.get('/browse/playlists', (request, response) => {
  return browseController.handlePlaylists(request, response);
});

routes.post('/playlist/create', (request, response) => {
  return createPlaylistController.handle(request, response);
});

routes.post('/playlist/item/add', (request, response) => {
  return addPlaylistItemsController.handle(request, response);
});

routes.get('/playlist/item/get', (request, response) => {
  return getPlaylistItemsController.handle(request, response);
});

export default routes;
